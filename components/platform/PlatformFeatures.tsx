'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Database, Video, GraduationCap, Search, Filter, PlayCircle } from 'lucide-react';

export function PlatformFeatures() {
    const features = [
        {
            title: 'Recipe Database',
            icon: Database,
            color: 'text-blue-500',
            bg: 'bg-blue-500/10',
            items: [
                'Sorted by Spirit Type (Aquavit, Gin, etc.)',
                'Search by Flavor Profile (Fruity, Bitter)',
                'Batch Prep Guides (1L, 2L, 3L)',
                'Difficulty & Occasion Filters'
            ]
        },
        {
            title: 'Video & Instructions',
            icon: Video,
            color: 'text-pink-500',
            bg: 'bg-pink-500/10',
            items: [
                'Step-by-Step Prep Guides',
                'Professional Technique Videos',
                'Garnish Tutorials',
                'Equipment Instructions'
            ]
        },
        {
            title: 'Education Platform',
            icon: GraduationCap,
            color: 'text-purple-500',
            bg: 'bg-purple-500/10',
            items: [
                'Bartender Training Modules',
                'Inventory Management',
                'Customer Service Training',
                'Certification Programs'
            ]
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
                <Card key={index} className="glass-card border-white/5 h-full">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <div className={`p-2 rounded-lg ${feature.bg} ${feature.color}`}>
                                <feature.icon size={20} />
                            </div>
                            {feature.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            {feature.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${feature.color}`} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
