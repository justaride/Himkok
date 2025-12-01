'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { PDFViewer } from '@/components/pdf/PDFViewer';
import {
    FileText,
    Users,
    Calendar,
    Tag,
    Eye,
    Download,
    Filter,
    Search,
    X
} from 'lucide-react';

interface PitchDeck {
    id: string;
    title: string;
    version: string;
    fileName: string;
    filePath: string;
    fileSize: number;
    pageCount: number | null;
    audience: string;
    focus: string[];
    date: string | null;
    status: string;
    description: string | null;
    keyHighlights: string[];
    tags: string[];
    childDecks: any[];
}

export default function PresentationsPage() {
    const [presentations, setPresentations] = useState<PitchDeck[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedDeck, setSelectedDeck] = useState<PitchDeck | null>(null);
    const [filterAudience, setFilterAudience] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchPresentations();
    }, [filterAudience]);

    async function fetchPresentations() {
        try {
            const params = new URLSearchParams();
            if (filterAudience !== 'all') params.set('audience', filterAudience);

            const response = await fetch(`/api/presentations?${params}`);
            const result = await response.json();
            setPresentations(result.data);
        } catch (error) {
            console.error('Error fetching presentations:', error);
        } finally {
            setLoading(false);
        }
    }

    const formatFileSize = (bytes: number) => {
        const mb = bytes / (1024 * 1024);
        return `${mb.toFixed(2)} MB`;
    };

    const formatDate = (dateString: string | null) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString('nb-NO');
    };

    const filteredDecks = presentations.filter(deck =>
        deck.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deck.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deck.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const audienceColors: Record<string, string> = {
        investors: 'bg-primary/20 text-primary border-primary/30',
        partners: 'bg-secondary/20 text-secondary border-secondary/30',
        distributors: 'bg-accent/20 text-accent border-accent/30',
        general: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    };

    if (selectedDeck) {
        return (
            <PDFViewer
                fileUrl={selectedDeck.filePath}
                fileName={selectedDeck.fileName}
                onClose={() => setSelectedDeck(null)}
            />
        );
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-xl">Loading presentations...</div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6 space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-4xl font-bold text-gradient">Presentations</h1>
                <p className="text-muted-foreground mt-2">
                    Business presentations for partners, investors, and distributors
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="glass-effect">
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">Total Presentations</p>
                                <p className="text-2xl font-bold">{presentations.length}</p>
                            </div>
                            <FileText className="text-primary" size={24} />
                        </div>
                    </CardContent>
                </Card>

                <Card className="glass-effect">
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">Audiences</p>
                                <p className="text-2xl font-bold">
                                    {new Set(presentations.map(d => d.audience)).size}
                                </p>
                            </div>
                            <Users className="text-secondary" size={24} />
                        </div>
                    </CardContent>
                </Card>

                <Card className="glass-effect">
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">Active</p>
                                <p className="text-2xl font-bold">
                                    {presentations.filter(d => d.status === 'active').length}
                                </p>
                            </div>
                            <Eye className="text-accent" size={24} />
                        </div>
                    </CardContent>
                </Card>

                <Card className="glass-effect">
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">Total Pages</p>
                                <p className="text-2xl font-bold">
                                    {presentations.reduce((sum, d) => sum + (d.pageCount || 0), 0)}
                                </p>
                            </div>
                            <Calendar className="text-primary" size={24} />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Filters & Search */}
            <Card>
                <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                            <input
                                type="text"
                                placeholder="Search presentations..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-10 py-2 bg-dark-200 border border-dark-300 rounded-lg focus:border-primary focus:outline-none"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                >
                                    <X size={16} />
                                </button>
                            )}
                        </div>

                        {/* Audience Filter */}
                        <div className="flex items-center gap-2">
                            <Filter size={20} className="text-muted-foreground" />
                            <select
                                value={filterAudience}
                                onChange={(e) => setFilterAudience(e.target.value)}
                                className="px-4 py-2 bg-dark-200 border border-dark-300 rounded-lg focus:border-primary focus:outline-none"
                            >
                                <option value="all">All Audiences</option>
                                <option value="investors">Investors</option>
                                <option value="partners">Partners</option>
                                <option value="distributors">Distributors</option>
                                <option value="general">General</option>
                            </select>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Deck Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDecks.map(deck => (
                    <Card key={deck.id} className="glass-effect hover:border-primary/50 transition-all cursor-pointer group">
                        <CardHeader>
                            <div className="flex items-start justify-between gap-2">
                                <div className="flex-1">
                                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                        {deck.title}
                                    </CardTitle>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {deck.version}
                                    </p>
                                </div>
                                <span className={`px-2 py-1 text-xs rounded border ${audienceColors[deck.audience]}`}>
                                    {deck.audience}
                                </span>
                            </div>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            {/* Description */}
                            {deck.description && (
                                <p className="text-sm text-foreground/70 line-clamp-2">
                                    {deck.description}
                                </p>
                            )}

                            {/* Key Highlights */}
                            {deck.keyHighlights.length > 0 && (
                                <div className="space-y-1">
                                    <p className="text-xs font-medium text-muted-foreground">Key Points:</p>
                                    <ul className="text-xs space-y-1">
                                        {deck.keyHighlights.slice(0, 3).map((highlight, idx) => (
                                            <li key={idx} className="flex items-start gap-1">
                                                <span className="text-primary mt-0.5">•</span>
                                                <span className="text-foreground/60">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Focus Areas */}
                            <div className="flex flex-wrap gap-1">
                                {deck.focus.slice(0, 4).map((focus, idx) => (
                                    <span
                                        key={idx}
                                        className="px-2 py-0.5 text-xs bg-dark-200 text-foreground/60 rounded"
                                    >
                                        {focus}
                                    </span>
                                ))}
                            </div>

                            {/* Meta */}
                            <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-dark-300">
                                <div className="flex items-center gap-4">
                                    {deck.pageCount && (
                                        <span className="flex items-center gap-1">
                                            <FileText size={14} />
                                            {deck.pageCount} pages
                                        </span>
                                    )}
                                    <span>{formatFileSize(deck.fileSize)}</span>
                                </div>
                                {deck.date && (
                                    <span className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        {formatDate(deck.date)}
                                    </span>
                                )}
                            </div>

                            {/* Actions */}
                            <div className="flex gap-2 pt-2">
                                <button
                                    onClick={() => setSelectedDeck(deck)}
                                    className="flex-1 px-4 py-2 bg-primary text-dark-950 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                                >
                                    <Eye size={16} />
                                    View
                                </button>
                                <a
                                    href={deck.filePath}
                                    download={deck.fileName}
                                    className="px-4 py-2 bg-dark-200 hover:bg-dark-300 rounded-lg transition-colors flex items-center justify-center"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Download size={16} />
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {filteredDecks.length === 0 && (
                <Card className="text-center py-12">
                    <CardContent>
                        <FileText size={48} className="mx-auto mb-4 opacity-50" />
                        <p className="text-lg text-muted-foreground">
                            {searchQuery ? 'No presentations match your search' : 'No presentations found'}
                        </p>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
