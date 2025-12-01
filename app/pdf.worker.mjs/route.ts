import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
    try {
        const workerPath = path.join(
            process.cwd(),
            'node_modules',
            'pdfjs-dist',
            'build',
            'pdf.worker.min.mjs'
        );

        const worker = await fs.readFile(workerPath, 'utf-8');

        return new NextResponse(worker, {
            headers: {
                'Content-Type': 'application/javascript',
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        });
    } catch (error) {
        console.error('Error serving PDF worker:', error);
        return new NextResponse('Worker not found', { status: 404 });
    }
}
