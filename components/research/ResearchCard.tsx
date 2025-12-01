'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { FileText, TrendingUp, Calendar, Tag } from 'lucide-react';
import { ResearchEntry, ResearchDataPoint } from '@prisma/client';

interface ResearchCardProps {
    entry: ResearchEntry & { dataPoints: ResearchDataPoint[] };
}

export function ResearchCard({ entry }: ResearchCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <Card className="h-full flex flex-col overflow-hidden border-border/50 hover:border-primary/50 transition-colors">
                <CardHeader className="pb-2">
                    <div className="flex justify-between items-start gap-2">
                        <div className="p-2 bg-surface-elevated rounded-md">
                            <FileText className="h-5 w-5 text-primary" />
                        </div>
                        {entry.category && (
                            <Badge variant="outline" className="text-xs">
                                {entry.category}
                            </Badge>
                        )}
                    </div>
                    <CardTitle className="text-lg font-semibold mt-2 line-clamp-2">
                        {entry.title}
                    </CardTitle>
                    <div className="flex items-center text-xs text-text-secondary mt-1 gap-2">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(entry.dateAdded).toLocaleDateString()}</span>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col gap-4">
                    <p className="text-sm text-text-secondary line-clamp-3">
                        {entry.summary}
                    </p>

                    {/* Intelligence Badges (Data Points) */}
                    {entry.dataPoints.length > 0 && (
                        <div className="mt-auto pt-4 border-t border-border/50">
                            <p className="text-xs font-medium text-text-muted mb-2 flex items-center gap-1">
                                <TrendingUp className="h-3 w-3" /> Key Intelligence
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {entry.dataPoints.slice(0, 3).map((dp) => (
                                    <div
                                        key={dp.id}
                                        className="flex items-center gap-1 px-2 py-1 bg-primary/10 rounded text-xs font-medium text-primary"
                                    >
                                        <span>{dp.metric}:</span>
                                        <span className="text-text-primary">{dp.value} {dp.unit}</span>
                                    </div>
                                ))}
                                {entry.dataPoints.length > 3 && (
                                    <span className="text-xs text-text-muted self-center">
                                        +{entry.dataPoints.length - 3} more
                                    </span>
                                )}
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    );
}
