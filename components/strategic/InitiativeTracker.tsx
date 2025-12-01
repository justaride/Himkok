'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Target, TrendingUp, Leaf, CheckCircle2, Factory, Globe } from 'lucide-react';

export function InitiativeTracker() {
    const initiatives = [
        {
            title: 'Northern Whiskey Distillery',
            target: 'Construction 2025',
            progress: 15,
            color: 'bg-amber-600',
            icon: Factory
        },
        {
            title: 'RTD Export (DK/UK)',
            target: 'Market Entry Q3 2025',
            progress: 35,
            color: 'bg-blue-500',
            icon: Globe
        },
        {
            title: 'Sustainability 2.0',
            target: 'Zero Waste Certified',
            progress: 85,
            color: 'bg-green-500',
            icon: Leaf
        }
    ];

    return (
        <Card className="glass-card h-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Strategic Initiatives
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {initiatives.map((init, index) => (
                    <div key={index} className="space-y-2 group">
                        <div className="flex justify-between items-end">
                            <div className="flex items-center gap-2">
                                <div className={`p-1.5 rounded-lg ${init.color} bg-opacity-10`}>
                                    <init.icon size={14} className={init.color.replace('bg-', 'text-')} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-text-primary">{init.title}</h4>
                                    <p className="text-xs text-text-secondary">{init.target}</p>
                                </div>
                            </div>
                            <span className="text-xs font-bold text-text-primary">{init.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-surface-elevated rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full ${init.color} transition-all duration-1000 ease-out group-hover:brightness-110`}
                                style={{ width: `${init.progress}%` }}
                            />
                        </div>
                    </div>
                ))}

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-text-muted">
                    <div className="flex items-center gap-1">
                        <CheckCircle2 size={12} className="text-green-500" />
                        <span>2 Completed (2024)</span>
                    </div>
                    <span>Next Review: Q3 2025</span>
                </div>
            </CardContent>
        </Card>
    );
}
