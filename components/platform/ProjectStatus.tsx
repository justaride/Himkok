'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { AlertTriangle, Clock, Hammer, Coins } from 'lucide-react';

export function ProjectStatus() {
    return (
        <Card className="glass-card border-l-4 border-l-red-500">
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Hammer className="h-5 w-5 text-red-500" />
                        Development Status
                    </div>
                    <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-500 text-xs font-bold uppercase tracking-wider">
                        Concept Phase
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <h4 className="text-sm font-medium text-text-muted uppercase tracking-wide">Current State</h4>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-sm text-text-secondary">
                            <Coins size={16} className="text-yellow-500" />
                            Funding: Not yet secured
                        </li>
                        <li className="flex items-center gap-2 text-sm text-text-secondary">
                            <Hammer size={16} className="text-gray-500" />
                            Tech Dev: Not started
                        </li>
                        <li className="flex items-center gap-2 text-sm text-text-secondary">
                            <Clock size={16} className="text-blue-500" />
                            Timeline: No concrete date
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="text-sm font-medium text-text-muted uppercase tracking-wide">Technical Challenges</h4>
                    <div className="space-y-2">
                        {[
                            'Scalable Video Infrastructure',
                            'Secure Payment Gateways',
                            'Complex Recipe Database Architecture',
                            'Enterprise API Integrations'
                        ].map((challenge, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-text-secondary bg-white/5 p-2 rounded">
                                <AlertTriangle size={14} className="text-amber-500" />
                                {challenge}
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
