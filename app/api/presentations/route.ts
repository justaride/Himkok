import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

/**
 * GET /api/pitch-decks
 * Fetch all pitch decks with optional filtering
 */
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const audience = searchParams.get('audience');
        const status = searchParams.get('status');

        const where: any = {};
        if (audience) where.audience = audience;
        if (status) where.status = status;

        const pitchDecks = await prisma.pitchDeck.findMany({
            where,
            include: {
                parentDeck: {
                    select: {
                        id: true,
                        title: true,
                        version: true,
                    },
                },
                childDecks: {
                    select: {
                        id: true,
                        title: true,
                        version: true,
                        date: true,
                    },
                },
                relatedMeetings: {
                    select: {
                        id: true,
                        title: true,
                        date: true,
                    },
                    take: 5,
                },
            },
            orderBy: [
                { date: 'desc' },
                { createdAt: 'desc' },
            ],
        });

        return NextResponse.json({ data: pitchDecks });
    } catch (error) {
        console.error('Error fetching pitch decks:', error);
        return NextResponse.json(
            { error: 'Failed to fetch pitch decks' },
            { status: 500 }
        );
    }
}

/**
 * POST /api/pitch-decks
 * Create a new pitch deck entry
 */
export async function POST(request: Request) {
    try {
        const body = await request.json();

        const pitchDeck = await prisma.pitchDeck.create({
            data: {
                title: body.title,
                version: body.version,
                fileName: body.fileName,
                filePath: body.filePath,
                fileType: body.fileType || 'pdf',
                fileSize: body.fileSize || 0,
                audience: body.audience,
                valueChainPosition: body.valueChainPosition || null,
                focus: body.focus || [],
                pageCount: body.pageCount || null,
                thumbnailPath: body.thumbnailPath || null,
                date: body.date ? new Date(body.date) : null,
                status: body.status || 'active',
                description: body.description || null,
                keyHighlights: body.keyHighlights || [],
                tags: body.tags || [],
                parentDeckId: body.parentDeckId || null,
            },
        });

        return NextResponse.json({ data: pitchDeck }, { status: 201 });
    } catch (error) {
        console.error('Error creating pitch deck:', error);
        return NextResponse.json(
            { error: 'Failed to create pitch deck' },
            { status: 500 }
        );
    }
}
