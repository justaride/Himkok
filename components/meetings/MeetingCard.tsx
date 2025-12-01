'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Calendar, Users, Tag, ArrowRight } from 'lucide-react';
import { MeetingNote } from '@prisma/client';
import Link from 'next/link';

interface MeetingCardProps {
    meeting: MeetingNote;
}

export function MeetingCard({ meeting }: MeetingCardProps) {
    return (
        <Link href={`/meetings/${meeting.id}`}>
            <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <Card className="h-full flex flex-col overflow-hidden border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
                    <CardHeader className="pb-2">
                        <div className="flex justify-between items-start gap-2">
                            <div className="flex items-center text-xs text-text-secondary gap-2 mb-1">
                                <Calendar className="h-3 w-3" />
                                <span>{new Date(meeting.date).toLocaleDateString()}</span>
                            </div>
                            {meeting.topics.length > 0 && (
                                <Badge variant="outline" className="text-xs">
                                    {meeting.topics[0]}
                                </Badge>
                            )}
                        </div>
                        <CardTitle className="text-lg font-semibold line-clamp-2">
                            {meeting.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col gap-4">
                        <p className="text-sm text-text-secondary line-clamp-3">
                            {meeting.summary || meeting.transcript.substring(0, 150) + '...'}
                        </p>

                        <div className="mt-auto pt-4 border-t border-border/50 flex justify-between items-center">
                            <div className="flex items-center gap-2 text-xs text-text-muted">
                                <Users className="h-3 w-3" />
                                <span>{meeting.attendees.length} Attendees</span>
                            </div>
                            <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </Link>
    );
}
