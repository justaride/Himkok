'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Truck, Sprout, Factory, GlassWater, ArrowRight } from 'lucide-react';

export function SupplyChainWidget() {
    const steps = [
        {
            icon: Sprout,
            title: "Sourcing",
            desc: "Potato Spirit Base & Local Botanicals",
            color: "text-green-500",
            bg: "bg-green-500/10"
        },
        {
            icon: Factory,
            title: "Production",
            desc: "In-house & Aass Brewery Partner",
            color: "text-amber-500",
            bg: "bg-amber-500/10"
        },
        {
            icon: GlassWater,
            title: "Service",
            desc: "KeyKeg Taptails System",
            color: "text-blue-500",
            bg: "bg-blue-500/10"
        }
    ];

    return (
        <Card className="glass-card h-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5 text-primary" />
                    Farm-to-Shaker Supply Chain
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="relative flex justify-between items-center pt-4">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 z-0" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center gap-3 group">
                            <div className={`w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center transition-all duration-300 ${step.bg} ${step.color} group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20`}>
                                <step.icon size={24} />
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-text-primary">{step.title}</p>
                                <p className="text-xs text-text-secondary max-w-[100px]">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 p-4 rounded-lg bg-surface-elevated/50 border border-white/5">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-text-secondary">Local Sourcing Rate</span>
                        <span className="font-bold text-green-500">82%</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-1.5 mt-2">
                        <div className="bg-green-500 h-1.5 rounded-full w-[82%]" />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
