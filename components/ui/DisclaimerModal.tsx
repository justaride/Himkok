'use client';

import { useState, useEffect } from 'react';
import { X, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function DisclaimerModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if user has already dismissed the modal in this session
        const hasSeenDisclaimer = sessionStorage.getItem('hasSeenDisclaimer');
        if (!hasSeenDisclaimer) {
            setIsOpen(true);
        }
    }, []);

    const handleDismiss = () => {
        setIsOpen(false);
        sessionStorage.setItem('hasSeenDisclaimer', 'true');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="w-full max-w-lg glass-card rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                    >
                        <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        <Info size={24} />
                                    </div>
                                    <h2 className="text-xl font-bold text-gradient">
                                        Velkommen til Himkok Dashboard (Beta)
                                    </h2>
                                </div>
                                <button
                                    onClick={handleDismiss}
                                    className="text-text-muted hover:text-text-primary transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="space-y-3 text-text-secondary text-sm leading-relaxed">
                                <p>
                                    <strong>Dette er en plattform under utvikling.</strong>
                                </p>
                                <p>
                                    Plattformen er tiltenkt å ha en variasjon av funksjoner som ikke er ferdig utviklet enda.
                                    Vi arbeider kontinuerlig med å forbedre og utvide funksjonaliteten.
                                </p>
                                <p>
                                    Denne meldingen og innholdet på plattformen vil synkroniseres og oppdateres etterhvert som prosjektet skrider frem.
                                </p>
                            </div>

                            <div className="pt-4 flex justify-end">
                                <button
                                    onClick={handleDismiss}
                                    className="px-6 py-2 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors shadow-lg shadow-primary/20"
                                >
                                    Forstått
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
