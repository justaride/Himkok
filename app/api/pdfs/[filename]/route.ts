import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ filename: string }> }
) {
    try {
        // Await params in Next.js 16
        const { filename: encodedFilename } = await params;

        // Decode URL-encoded filename (handles %23 -> #, etc.)
        const filename = decodeURIComponent(encodedFilename);

        // Security: prevent directory traversal
        if (filename.includes('..') || filename.includes('/')) {
            return new NextResponse('Invalid filename', { status: 400 });
        }

        // Construct file path
        const filePath = path.join(process.cwd(), 'public', 'pdfs', filename);

        // Check if file exists
        try {
            await fs.access(filePath);
        } catch {
            return new NextResponse('File not found', { status: 404 });
        }

        // Read file
        const fileBuffer = await fs.readFile(filePath);

        // Return file with appropriate headers
        return new NextResponse(fileBuffer, {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `inline; filename="${filename}"`,
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        });
    } catch (error) {
        console.error('Error serving PDF:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
