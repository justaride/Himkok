import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();
const MIRO_FOLDER = path.join(process.cwd(), 'MIRO FOLDER');

async function getOrCreateSystemUser() {
    const email = 'system@himkok.no';
    let user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        user = await prisma.user.create({
            data: {
                email,
                name: 'System Importer',
                role: 'admin',
            },
        });
    }
    return user;
}

function parseMarkdown(content: string) {
    // Simple parser to extract title (first h1) and summary (first paragraph)
    const lines = content.split('\n');
    let title = 'Untitled';
    let summary = '';
    let isSummary = false;

    for (const line of lines) {
        if (line.startsWith('# ') && title === 'Untitled') {
            title = line.replace('# ', '').trim();
        } else if (line.trim() !== '' && !line.startsWith('#') && summary === '') {
            summary = line.trim();
        }
    }

    if (summary.length > 500) {
        summary = summary.substring(0, 497) + '...';
    }

    if (!summary) {
        summary = 'No summary available.';
    }

    return { title, summary, content };
}

async function main() {
    console.log('📚 Starting Research & Meeting Notes Import...');

    const systemUser = await getOrCreateSystemUser();
    const files = fs.readdirSync(MIRO_FOLDER).filter(f => f.endsWith('.md'));

    console.log(`Found ${files.length} Markdown files to process.`);

    for (const file of files) {
        const filePath = path.join(MIRO_FOLDER, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const { title, summary, content: fullContent } = parseMarkdown(content);

        // Determine type based on filename
        const isMeeting = file.toLowerCase().includes('møte') || file.toLowerCase().includes('meeting');

        if (isMeeting) {
            // Create Meeting Note
            await prisma.meetingNote.create({
                data: {
                    title: title !== 'Untitled' ? title : file.replace('.md', ''),
                    date: new Date(), // Default to now, ideally parse from filename/content
                    transcript: fullContent,
                    summary: summary,
                    sourceFile: file,
                    createdById: systemUser.id,
                    attendees: [],
                    keyPoints: [],
                    decisions: [],
                    topics: [],
                    tags: ['imported'],
                },
            });
            console.log(`✅ Imported Meeting: ${file}`);
        } else {
            // Create Research Entry
            await prisma.researchEntry.create({
                data: {
                    title: title !== 'Untitled' ? title : file.replace('.md', ''),
                    summary: summary,
                    content: fullContent,
                    source: 'Miro Export',
                    sourceFile: file,
                    category: 'General', // Default category
                    verificationStatus: 'unverified',
                    createdById: systemUser.id,
                    topics: [],
                    tags: ['imported', 'miro'],
                },
            });
            console.log(`✅ Imported Research: ${file}`);
        }
    }

    console.log('✅ Import completed successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
