'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Briefcase, Megaphone, BarChart3, Share2 } from 'lucide-react';

export function B2BSolutions() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* B2B Solutions */}
            <Card className="glass-card">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        B2B Solutions
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                        <div className="p-2 rounded bg-surface-elevated text-primary">
                            <Share2 size={18} />
                        </div>
                        <div>
                            <h4 className="font-medium text-text-primary">White-Label Solutions</h4>
                            <p className="text-sm text-text-secondary">Distributor partnerships with customized branding.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="p-2 rounded bg-surface-elevated text-primary">
                            <BarChart3 size={18} />
                        </div>
                        <div>
                            <h4 className="font-medium text-text-primary">Chain Management</h4>
                            <p className="text-sm text-text-secondary">Centralized administration for bar chains and hotels.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Marketing Opportunities */}
            <Card className="glass-card">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Megaphone className="h-5 w-5 text-accent" />
                        Marketing Opportunities
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="p-3 rounded-lg bg-surface-elevated/30 border border-white/5">
                        <h4 className="text-sm font-bold text-text-primary mb-1">Premium Placement</h4>
                        <p className="text-xs text-text-secondary">6-month campaigns for paying brand partners.</p>
                    </div>
                    <div className="p-3 rounded-lg bg-surface-elevated/30 border border-white/5">
                        <h4 className="text-sm font-bold text-text-primary mb-1">Sponsored Collections</h4>
                        <p className="text-xs text-text-secondary">Brand-specific cocktail collections and content.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
