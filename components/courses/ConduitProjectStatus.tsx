'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Building2, Lock, AlertCircle, CheckCircle2 } from 'lucide-react';

export function ConduitProjectStatus() {
    return (
        <Card className="glass-card h-full border-l-4 border-l-amber-500">
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-amber-500" />
                        Project: Conduit
                    </div>
                    <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-wider">
                        Negotiation Phase
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="p-4 rounded-xl bg-surface-elevated/50 border border-white/5">
                    <h4 className="text-sm font-medium text-text-muted uppercase tracking-wide mb-3">Property Details</h4>
                    <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-text-secondary">Owner</span>
                            <span className="font-medium text-text-primary">Entra</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-text-secondary">Primary Use</span>
                            <span className="font-medium text-text-primary">Course & Education Center</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-text-secondary">Secondary Use</span>
                            <span className="font-medium text-text-primary">Members Bar (Weekends)</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    <h4 className="text-sm font-medium text-text-muted uppercase tracking-wide">Status & Challenges</h4>

                    <div className="flex items-start gap-3 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                        <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                        <div>
                            <p className="text-sm font-medium text-red-400">Financial Sustainability</p>
                            <p className="text-xs text-red-400/80 mt-1">
                                High rental costs require robust business model validation before signing.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                        <Lock className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                        <div>
                            <p className="text-sm font-medium text-blue-400">Negotiation Status</p>
                            <p className="text-xs text-blue-400/80 mt-1">
                                In dialogue with Entra. Project not yet formally initiated.
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
