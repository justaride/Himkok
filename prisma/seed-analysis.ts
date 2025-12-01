import { PrismaClient } from '@prisma/client';
import { extractMetrics } from '../lib/analysis/extractor';

const prisma = new PrismaClient();

async function main() {
    console.log('🧠 Starting Deep Analysis (Data Extraction)...');

    // Fetch all research entries
    const entries = await prisma.researchEntry.findMany();
    console.log(`Analyzing ${entries.length} research entries...`);

    let totalPoints = 0;

    for (const entry of entries) {
        if (!entry.content) continue;

        const metrics = extractMetrics(entry.content);

        if (metrics.length > 0) {
            console.log(`Found ${metrics.length} metrics in "${entry.title}"`);

            for (const m of metrics) {
                await prisma.researchDataPoint.create({
                    data: {
                        researchEntryId: entry.id,
                        metric: m.metric,
                        value: m.value,
                        unit: m.unit,
                        year: m.year,
                    }
                });
            }
            totalPoints += metrics.length;
        }
    }

    console.log(`✅ Deep Analysis Complete! Extracted ${totalPoints} structured data points.`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
