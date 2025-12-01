'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Zap, AlertTriangle, Globe, Shield } from 'lucide-react';

export function SwotMatrix() {
    const sections = [
        {
            title: 'Strengths',
            icon: Zap,
            color: 'text-green-500',
            bg: 'bg-green-500/10',
            border: 'border-green-500/20',
            items: ['Brand Power (#10 World)', '85% In-House Production', 'Zero-Waste Certified']
        },
        {
            title: 'Weaknesses',
            icon: AlertTriangle,
            color: 'text-yellow-500',
            bg: 'bg-yellow-500/10',
            border: 'border-yellow-500/20',
            items: ['Location Dependence', 'Capacity Limits (450 pax)', 'High Staffing Costs']
        },
        {
            title: 'Opportunities',
            icon: Globe,
            color: 'text-blue-500',
            bg: 'bg-blue-500/10',
            border: 'border-blue-500/20',
            items: ['Global RTD Expansion', 'Consultancy Services', 'Himkok on Tour']
        },
        {
            title: 'Threats',
            icon: Shield,
            color: 'text-red-500',
            bg: 'bg-red-500/10',
            border: 'border-red-500/20',
            items: ['Strict Alcohol Laws', 'Rising Ingredient Costs', 'New Competitors']
        }
    ];

    return (
        <Card className="glass-card h-full">
            <CardHeader>
                <CardTitle>SWOT Analysis</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4 h-full">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className={`p-4 rounded-xl border ${section.border} ${section.bg} hover:bg-opacity-20 transition-all cursor-default group`}
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <section.icon className={`h-5 w-5 ${section.color}`} />
                                <h3 className={`font-semibold ${section.color}`}>{section.title}</h3>
                            </div>
                            <ul className="space-y-2">
                                {section.items.map((item, i) => (
                                    <li key={i} className="text-xs text-text-secondary flex items-start gap-2">
                                        <span className={`mt-1 w-1 h-1 rounded-full ${section.color}`} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
