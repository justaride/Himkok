import { PrismaClient } from '@prisma/client';
import { MeetingCard } from '@/components/meetings/MeetingCard';
import { FileText, Calendar, Users, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

export default async function MeetingsPage() {
    // Fetch meetings
    const meetings = await prisma.meetingNote.findMany({
        orderBy: {
            date: 'desc',
        },
    });

    // Calculate stats
    const totalMeetings = meetings.length;
    const thisMonth = meetings.filter(m => {
        const d = new Date(m.date);
        const now = new Date();
        return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    }).length;

    // Mock action items count since we don't have the relation fully populated yet
    const actionItemsCount = 0;

    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-text-primary mb-2 flex items-center">
                    <FileText className="mr-3 h-8 w-8 text-secondary-light" />
                    Meeting Notes
                </h1>
                <p className="text-text-secondary">
                    Document and track meetings, decisions, and action items.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-6 mb-8 sm:grid-cols-3">
                <Card>
                    <CardContent className="pt-6">
                        <FileText className="h-8 w-8 text-primary mb-4" />
                        <h3 className="text-2xl font-bold text-text-primary">{totalMeetings}</h3>
                        <p className="text-sm text-text-secondary">Total Meetings</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <Calendar className="h-8 w-8 text-accent mb-4" />
                        <h3 className="text-2xl font-bold text-text-primary">{thisMonth}</h3>
                        <p className="text-sm text-text-secondary">This Month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <Tag className="h-8 w-8 text-info mb-4" />
                        <h3 className="text-2xl font-bold text-text-primary">{actionItemsCount}</h3>
                        <p className="text-sm text-text-secondary">Action Items</p>
                    </CardContent>
                </Card>
            </div>

            {/* Meetings Grid */}
            {meetings.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {meetings.map((meeting) => (
                        <MeetingCard key={meeting.id} meeting={meeting} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 bg-surface-elevated rounded-lg border border-border">
                    <p className="text-text-secondary">No meeting notes found.</p>
                </div>
            )}
        </div>
    );
}
