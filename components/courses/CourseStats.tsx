'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { Users, MapPin, GraduationCap, Star } from 'lucide-react';

export function CourseStats() {
    const stats = [
        {
            label: 'Active Participants',
            value: '3,000 - 5,000',
            subtext: 'Across Norway',
            icon: Users,
            color: 'text-blue-500',
            bg: 'bg-blue-500/10'
        },
        {
            label: 'Active Locations',
            value: '4 Cities',
            subtext: 'Oslo, Stavanger, Trondheim, Bergen',
            icon: MapPin,
            color: 'text-green-500',
            bg: 'bg-green-500/10'
        },
        {
            label: 'Course Format',
            value: 'Cocktail & Culture',
            subtext: 'Focus on Himkok Products',
            icon: GraduationCap,
            color: 'text-purple-500',
            bg: 'bg-purple-500/10'
        },
        {
            label: 'Concept',
            value: 'Guest Shifts',
            subtext: '& Competence Exchange',
            icon: Star,
            color: 'text-amber-500',
            bg: 'bg-amber-500/10'
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
                <Card key={index} className="glass-card border-white/5">
                    <CardContent className="p-6 flex items-center gap-4">
                        <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                            <stat.icon size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-text-secondary">{stat.label}</p>
                            <h3 className="text-xl font-bold text-text-primary">{stat.value}</h3>
                            <p className="text-xs text-text-muted mt-1">{stat.subtext}</p>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
