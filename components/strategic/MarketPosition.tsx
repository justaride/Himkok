'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Globe } from 'lucide-react';

const data = [
    { subject: 'Innovation', A: 95, B: 70, fullMark: 100 },
    { subject: 'Sustainability', A: 98, B: 60, fullMark: 100 },
    { subject: 'Price', A: 65, B: 85, fullMark: 100 },
    { subject: 'Volume', A: 90, B: 50, fullMark: 100 },
    { subject: 'Brand', A: 92, B: 80, fullMark: 100 },
    { subject: 'Service', A: 85, B: 90, fullMark: 100 },
];

export function MarketPosition() {
    return (
        <Card className="glass-card h-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-accent" />
                    Market Position
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                            <PolarGrid stroke="#374151" />
                            <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 10 }} />
                            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                            <Radar
                                name="Himkok"
                                dataKey="A"
                                stroke="#3b82f6"
                                strokeWidth={2}
                                fill="#3b82f6"
                                fillOpacity={0.3}
                            />
                            <Radar
                                name="Competitor Avg"
                                dataKey="B"
                                stroke="#9ca3af"
                                strokeWidth={1}
                                fill="#9ca3af"
                                fillOpacity={0.1}
                                strokeDasharray="3 3"
                            />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6', fontSize: '12px' }}
                                itemStyle={{ color: '#f3f4f6' }}
                            />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-4 mt-2 text-xs">
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-text-secondary">Himkok</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-gray-400" />
                        <span className="text-text-secondary">Competitor Avg</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
