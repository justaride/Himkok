'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { ShieldCheck, FlaskConical, Clock, AlertCircle, Factory } from 'lucide-react';

export function ProductionStatus() {
    const batches = [
        { id: 'B-2025-001', name: 'Aquavit Reserve', status: 'Aging', time: '14 months', icon: Clock, color: 'text-amber-500' },
        { id: 'RTD-042', name: 'Oslo Mule (Aass)', status: 'Canning', time: '10,000L Batch', icon: Factory, color: 'text-blue-500' },
        { id: 'GIN-043', name: 'Old Tom Gin', status: 'Distilling', time: 'In-House', icon: FlaskConical, color: 'text-green-500' },
    ];

    return (
        <Card className="glass-card h-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <FlaskConical className="h-5 w-5 text-accent" />
                    Active Production Batches
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {batches.map((batch) => (
                        <div key={batch.id} className="flex items-center justify-between p-3 rounded-lg bg-surface-elevated/50 border border-white/5 hover:bg-white/5 transition-colors group">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg bg-white/5 ${batch.color}`}>
                                    <batch.icon size={18} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors">{batch.name}</p>
                                    <p className="text-xs text-text-secondary">{batch.id}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className={`text-xs font-medium px-2 py-1 rounded-full bg-white/5 ${batch.color}`}>
                                    {batch.status}
                                </span>
                                <p className="text-xs text-text-secondary mt-1">{batch.time}</p>
                            </div>
                        </div>
                    ))}

                    <div className="pt-2 border-t border-white/5">
                        <div className="flex items-center gap-2 text-xs text-text-muted">
                            <AlertCircle size={14} />
                            <span>Next QC Audit: Tomorrow, 09:00</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
