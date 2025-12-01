const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const dataPoints = await prisma.researchDataPoint.count();
    console.log(`Research Data Points: ${dataPoints}`);

    const sample = await prisma.researchDataPoint.findMany({ take: 5 });
    console.log('Sample Data Points:', JSON.stringify(sample, null, 2));
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
