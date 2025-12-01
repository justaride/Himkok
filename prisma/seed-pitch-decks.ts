import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Seed pitch deck metadata - PDFs now in public/pitch-decks/
 */

async function seedPitchDecks() {
    console.log('🎯 Seeding Pitch Deck metadata...');

    // Delete existing pitch decks to avoid duplicates
    await prisma.pitchDeck.deleteMany();

    const pitchDecks = [
        {
            title: 'Himkok Pitch Deck - Iteration #2',
            version: 'v2.0 (CLXT)',
            fileName: 'Copy of Himkok Pitch Deck - Iteration #2 CLXT VERSION _compressed.pdf',
            filePath: '/pitch-decks/Copy of Himkok Pitch Deck - Iteration #2 CLXT VERSION _compressed.pdf',
            fileType: 'pdf',
            fileSize: 1169899,
            pageCount: 20,
            audience: 'investors',
            valueChainPosition: null,
            focus: ['Overview', 'Business Model', 'Financials', 'Growth Strategy'],
            date: new Date('2024-01-01'),
            status: 'active',
            description: 'Comprehensive investor pitch deck covering Himkok\'s business model, financial performance, and growth strategy. Second iteration with CLXT updates.',
            keyHighlights: [
                'World\'s #11 Best Bar (2024)',
                'NOK 48M revenue (2023)',
                'Multi-channel revenue: Bar, RTD, Distillery, Consulting',
                'Expansion plans: Whiskey distillery, Connect Spirit platform'
            ],
            tags: ['investor', 'comprehensive', 'v2', 'clxt'],
        },
        {
            title: 'HIMKOK - Ready to Drink',
            version: 'v1.0',
            fileName: 'HIMKOK - READY TO DRINK.pdf',
            filePath: '/pitch-decks/HIMKOK - READY TO DRINK.pdf',
            fileType: 'pdf',
            fileSize: 2652828,
            pageCount: 17,
            audience: 'distributors',
            valueChainPosition: 'distributors',
            focus: ['RTD', 'Product Range', 'Distribution'],
            date: new Date('2023-06-01'),
            status: 'active',
            description: 'RTD product line presentation for distributors and retailers. Showcases canned cocktail range, production capacity, and distribution strategy.',
            keyHighlights: [
                '~500 stores nationwide',
                'Norwegian Air in-flight product',
                '4.7% ABV for grocery retail',
                'Award-winning formulations (Spirits Business Gold)'
            ],
            tags: ['rtd', 'distributors', 'products'],
        },
        {
            title: 'HIMKOK Press Kit',
            version: 'v1.0',
            fileName: 'HIMKOK PRESS KIT.pdf',
            filePath: '/pitch-decks/HIMKOK PRESS KIT.pdf',
            fileType: 'pdf',
            fileSize: 1708719,
            pageCount: null,
            audience: 'general',
            valueChainPosition: null,
            focus: ['Brand', 'Media', 'Press'],
            date: new Date('2023-01-01'),
            status: 'active',
            description: 'Official press kit with brand assets, high-resolution images, fact sheets, and media information.',
            keyHighlights: [
                'Brand story and heritage',
                'Awards and recognition',
                'Media assets',
                'Contact information'
            ],
            tags: ['press', 'media', 'brand'],
        },
        {
            title: 'Destilleri Presentasjon 2021',
            version: 'v1.0',
            fileName: '211111_Presentasjon – destilleri-compressed (1).pdf',
            filePath: '/pitch-decks/211111_Presentasjon – destilleri-compressed (1).pdf',
            fileType: 'pdf',
            fileSize: 10410273,
            pageCount: null,
            audience: 'partners',
            valueChainPosition: 'suppliers',
            focus: ['Distillery', 'Production', 'Technical'],
            date: new Date('2021-11-11'),
            status: 'archived',
            description: 'Technical presentation about Himkok\'s distillery operations and production capabilities. Historical document from 2021.',
            keyHighlights: [
                'On-site distillery capacity',
                'Spirit production process',
                'Quality control',
                'Sustainability practices'
            ],
            tags: ['distillery', '2021', 'technical', 'archived'],
        },
        {
            title: 'Strategic Analysis - Global Cocktail Bar',
            version: 'v1.0',
            fileName: 'Himkok_ Strategic Analysis of a Globally Acclaimed Norwegian Cocktail Bar.pdf',
            filePath: '/pitch-decks/Himkok_ Strategic Analysis of a Globally Acclaimed Norwegian Cocktail Bar.pdf',
            fileType: 'pdf',
            fileSize: 984263,
            pageCount: 8,
            audience: 'investors',
            valueChainPosition: null,
            focus: ['Strategy', 'Market Analysis', 'Competition'],
            date: new Date('2024-01-01'),
            status: 'active',
            description: 'In-depth strategic analysis of Himkok\'s market position, competitive advantages, and growth opportunities as a globally recognized cocktail bar.',
            keyHighlights: [
                'Market positioning analysis',
                'Competitive landscape',
                'Strategic opportunities',
                'Global recognition impact'
            ],
            tags: ['strategy', 'analysis', 'market'],
        },
        {
            title: 'Henningsvær Destilleri - Grant Application Phase 2',
            version: 'v1.0',
            fileName: 'Søknad - Markedsavklaringstilskudd Fase 2 - Henningsvær Destilleri AS.pdf',
            filePath: '/pitch-decks/Søknad - Markedsavklaringstilskudd Fase 2 - Henningsvær Destilleri AS.pdf',
            fileType: 'pdf',
            fileSize: 449504,
            pageCount: 8,
            audience: 'partners',
            valueChainPosition: null,
            focus: ['Whiskey', 'Grant', 'Expansion'],
            date: new Date('2024-01-01'),
            status: 'active',
            description: 'Grant application for Henningsvær Destilleri whiskey project - Phase 2 market clarification funding.',
            keyHighlights: [
                'Whiskey distillery project',
                'Henningsvær location',
                'Market development funding',
                'Phase 2 expansion'
            ],
            tags: ['whiskey', 'grant', 'henningsvær', 'expansion'],
        },
    ];

    for (const deck of pitchDecks) {
        await prisma.pitchDeck.create({
            data: deck,
        });
        console.log(`✅ Added: ${deck.title}`);
    }

    console.log('✅ Pitch deck seeding completed!');
}

async function main() {
    await seedPitchDecks();
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error('❌ Error seeding pitch decks:', e);
        await prisma.$disconnect();
        process.exit(1);
    });
