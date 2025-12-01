import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');

    if (!query || query.length < 2) {
        return NextResponse.json({ results: [] });
    }

    try {
        // 1. Search Pages (Static)
        const pages = [
            { title: 'Dashboard', url: '/', category: 'Page' },
            { title: 'Finance', url: '/finance', category: 'Page' },
            { title: 'Research', url: '/research', category: 'Page' },
            { title: 'Meetings', url: '/meetings', category: 'Page' },
            { title: 'Operations', url: '/operations', category: 'Page' },
            { title: 'Strategic', url: '/strategic', category: 'Page' },
            { title: 'Company', url: '/company', category: 'Page' },
            { title: 'Brand Assets', url: '/brand', category: 'Page' },
        ].filter(page => page.title.toLowerCase().includes(query.toLowerCase()));

        // 2. Search Research Entries
        const research = await prisma.researchEntry.findMany({
            where: {
                OR: [
                    { title: { contains: query, mode: 'insensitive' } },
                    { summary: { contains: query, mode: 'insensitive' } },
                ],
            },
            take: 5,
            select: {
                id: true,
                title: true,
                category: true,
            },
        });

        // 3. Search Meeting Notes
        const meetings = await prisma.meetingNote.findMany({
            where: {
                OR: [
                    { title: { contains: query, mode: 'insensitive' } },
                    { transcript: { contains: query, mode: 'insensitive' } },
                ],
            },
            take: 5,
            select: {
                id: true,
                title: true,
                date: true,
            },
        });

        // Format results
        const results = [
            ...pages.map(p => ({ ...p, type: 'page', id: p.url })),
            ...research.map(r => ({
                title: r.title,
                url: `/research?q=${encodeURIComponent(r.title)}`, // Deep link to research search or detail if we had one
                category: 'Research',
                type: 'research',
                id: r.id
            })),
            ...meetings.map(m => ({
                title: m.title,
                url: `/meetings/${m.id}`,
                category: 'Meeting',
                type: 'meeting',
                id: m.id
            })),
        ];

        return NextResponse.json({ results });
    } catch (error) {
        console.error('Search error:', error);
        return NextResponse.json({ results: [] }, { status: 500 });
    }
}
