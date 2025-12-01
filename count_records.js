const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const financialPeriods = await prisma.financialPeriod.count();
    const pitchDecks = await prisma.pitchDeck.count();
    const researchEntries = await prisma.researchEntry.count();
    const meetingNotes = await prisma.meetingNote.count();
    const projections = await prisma.projection.count();

    console.log(JSON.stringify({
        financialPeriods,
        pitchDecks,
        researchEntries,
        meetingNotes,
        projections
    }, null, 2));
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
