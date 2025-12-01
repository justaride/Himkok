'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, FileText, Calendar, Layout, Loader2, ArrowRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface SearchResult {
    id: string;
    title: string;
    url: string;
    category: string;
    type: 'page' | 'research' | 'meeting';
}

interface GlobalSearchProps {
    isOpen: boolean;
    onClose: () => void;
}

export function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
    const router = useRouter();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // Focus input when opened
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        } else {
            setQuery('');
            setResults([]);
        }
    }, [isOpen]);

    // Handle search
    useEffect(() => {
        const search = async () => {
            if (query.length < 2) {
                setResults([]);
                return;
            }

            setLoading(true);
            try {
                const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
                const data = await res.json();
                setResults(data.results);
            } catch (error) {
                console.error('Search failed:', error);
            } finally {
                setLoading(false);
            }
        };

        const debounce = setTimeout(search, 300);
        return () => clearTimeout(debounce);
    }, [query]);

    // Handle navigation
    const handleSelect = (url: string) => {
        router.push(url);
        onClose();
    };

    // Close on Escape
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="fixed left-1/2 top-[20%] -translate-x-1/2 w-full max-w-2xl bg-surface/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden ring-1 ring-white/5"
                    >
                        {/* Search Header */}
                        <div className="flex items-center px-4 py-4 border-b border-white/5 relative">
                            <Search className="h-6 w-6 text-text-muted mr-3" />
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search pages, research, meetings..."
                                className="flex-1 bg-transparent border-none outline-none text-xl text-text-primary placeholder-text-muted/50 font-light"
                            />
                            {loading ? (
                                <Loader2 className="h-5 w-5 text-primary animate-spin" />
                            ) : (
                                <div className="px-2 py-1 rounded bg-surface-elevated border border-white/5 text-xs text-text-muted">
                                    ESC
                                </div>
                            )}
                        </div>

                        {/* Results */}
                        <div className="max-h-[60vh] overflow-y-auto p-2">
                            {results.length > 0 ? (
                                <div className="space-y-1">
                                    {results.map((result) => (
                                        <button
                                            key={`${result.type}-${result.id}`}
                                            onClick={() => handleSelect(result.url)}
                                            className="w-full flex items-center px-4 py-3 rounded-lg hover:bg-surface-elevated transition-colors group text-left"
                                        >
                                            <div className="p-2 bg-surface rounded-md mr-4 border border-border group-hover:border-primary/50 transition-colors">
                                                {result.type === 'page' && <Layout className="h-5 w-5 text-text-secondary" />}
                                                {result.type === 'research' && <FileText className="h-5 w-5 text-blue-500" />}
                                                {result.type === 'meeting' && <Calendar className="h-5 w-5 text-green-500" />}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-medium text-text-primary group-hover:text-primary transition-colors">
                                                    {result.title}
                                                </h4>
                                                <p className="text-xs text-text-muted capitalize">{result.category}</p>
                                            </div>
                                            <ArrowRight className="h-4 w-4 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </button>
                                    ))}
                                </div>
                            ) : query.length > 1 && !loading ? (
                                <div className="text-center py-8 text-text-muted">
                                    No results found for "{query}"
                                </div>
                            ) : (
                                <div className="text-center py-8 text-text-muted text-sm">
                                    Type to search across the entire dashboard
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="px-4 py-2 bg-surface-elevated border-t border-border text-xs text-text-muted flex justify-between">
                            <span>Press <kbd className="px-1 py-0.5 bg-surface rounded border border-border">Esc</kbd> to close</span>
                            <span>Himkok Intelligence</span>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
