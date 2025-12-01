import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Calendar, Users, Tag, ArrowLeft, FileText } from 'lucide-react';
import Link from 'next/link';

const prisma = new PrismaClient();

export default async function MeetingDetailPage({ params }: { params: { id: string } }) {
    const meeting = await prisma.meetingNote.findUnique({
        where: { id: params.id },
    });

    if (!meeting) {
        notFound();
    }

    return (
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
            <Link
                href="/meetings"
                className="inline-flex items-center text-sm text-text-secondary hover:text-primary mb-6 transition-colors"
            >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Meetings
            </Link>

            <div className="mb-8">
                <div className="flex flex-wrap gap-2 mb-4">
                    {meeting.topics.map((topic) => (
                        <Badge key={topic} variant="secondary">
                            {topic}
                        </Badge>
                    ))}
                </div>
                <h1 className="text-3xl font-bold text-text-primary mb-4">{meeting.title}</h1>

                <div className="flex flex-wrap gap-6 text-sm text-text-secondary">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(meeting.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{meeting.attendees.length} Attendees</span>
                    </div>
                    {meeting.location && (
                        <div className="flex items-center gap-2">
                            <Tag className="h-4 w-4" />
                            <span>{meeting.location}</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="grid gap-8">
                {/* Summary Section */}
                {meeting.summary && (
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <FileText className="h-5 w-5 text-primary" />
                                Executive Summary
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="prose prose-invert max-w-none text-text-secondary">
                                <p>{meeting.summary}</p>
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Full Transcript */}
                <Card>
                    <CardHeader>
                        <CardTitle>Transcript / Notes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="prose prose-invert max-w-none text-text-secondary whitespace-pre-wrap">
                            {meeting.transcript}
                        </div>
                    </CardContent>
                </Card>

                {/* Attendees List */}
                {meeting.attendees.length > 0 && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Attendees</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {meeting.attendees.map((attendee, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 px-3 py-2 bg-surface-elevated rounded-full border border-border"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                                            {attendee.charAt(0)}
                                        </div>
                                        <span className="text-sm text-text-primary">{attendee}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}
