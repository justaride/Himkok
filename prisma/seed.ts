import { PrismaClient } from '@prisma/client';
import { extract2023FinancialData, extractHistoricalTrends } from '../lib/data/financial-extractor';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting database seed...');

    // Clear existing data (optional - comment out if you want to keep data)
    console.log('Clearing existing financial data...');
    await prisma.conflict.deleteMany();
    await prisma.financialPeriod.deleteMany();

    // Seed 2023 financial data
    console.log('Seeding 2023 financial data...');
    const data2023 = extract2023FinancialData();

    const period2023 = await prisma.financialPeriod.create({
        data: {
            year: data2023.year,
            quarter: data2023.quarter || null,
            revenue: data2023.revenue,
            cogs: data2023.cogs,
            grossProfit: data2023.grossProfit,
            laborCosts: data2023.laborCosts,
            operatingCosts: data2023.operatingCosts,
            depreciation: data2023.depreciation,
            ebitda: data2023.ebitda,
            ebit: data2023.ebit,
            financialIncome: data2023.financialIncome,
            financialCosts: data2023.financialCosts,
            pretaxProfit: data2023.pretaxProfit,
            taxes: data2023.taxes,
            netProfit: data2023.netProfit,
            totalAssets: data2023.totalAssets,
            currentAssets: data2023.currentAssets,
            fixedAssets: data2023.fixedAssets,
            financialAssets: data2023.financialAssets,
            totalLiabilities: data2023.totalLiabilities,
            currentLiabilities: data2023.currentLiabilities,
            longTermDebt: data2023.longTermDebt,
            equity: data2023.equity,
            cashAndBank: data2023.cashAndBank,
            operatingCashFlow: data2023.operatingCashFlow,
            investingCashFlow: data2023.investingCashFlow || null,
            financingCashFlow: data2023.financingCashFlow || null,
            barRevenue: data2023.barRevenue,
            distilleryRevenue: data2023.distilleryRevenue,
            rtdRevenue: data2023.rtdRevenue,
            consultingRevenue: data2023.consultingRevenue,
            otherRevenue: data2023.otherRevenue,
            employees: data2023.employees || null,
            inventoryValue: data2023.inventoryValue || null,
            accountsReceivable: data2023.accountsReceivable || null,
            accountsPayable: data2023.accountsPayable || null,
            grossMargin: data2023.grossMargin,
            ebitdaMargin: data2023.ebitdaMargin,
            netMargin: data2023.netMargin,
            debtToEquity: data2023.debtToEquity || null,
            currentRatio: data2023.currentRatio || null,
            quickRatio: data2023.quickRatio || null,
            dataSource: data2023.dataSource,
            verified: data2023.verified,
            notes: data2023.notes || null,
        },
    });

    console.log(`✅ Created 2023 financial period: ${period2023.id}`);

    // Seed historical data (2019-2022)
    console.log('Seeding historical financial data (2019-2022)...');
    const historicalData = extractHistoricalTrends();

    for (const [yearStr, data] of Object.entries(historicalData)) {
        const year = parseInt(yearStr);
        if (year === 2023) continue; // Already added above

        // Calculate KPIs for historical data
        const grossMargin = data.revenue ? ((data.revenue - (data.revenue * 0.28)) / data.revenue) * 100 : 72; // Assume similar COGS %
        const ebitdaMargin = data.revenue && data.ebitda ? (data.ebitda / data.revenue) * 100 : 0;

        await prisma.financialPeriod.create({
            data: {
                year,
                revenue: data.revenue,
                cogs: data.revenue * 0.28, // Estimated based on 2023 ratio
                grossProfit: data.revenue * 0.72,
                laborCosts: data.revenue * 0.35, // Estimated
                operatingCosts: data.revenue * 0.25, // Estimated
                depreciation: 800000, // Rough estimate
                ebitda: data.ebitda,
                ebit: data.ebitda - 800000,
                financialIncome: 0,
                financialCosts: 85000,
                pretaxProfit: data.ebitda - 885000,
                taxes: (data.ebitda - 885000) * 0.15,
                netProfit: (data.ebitda - 885000) * 0.85,
                totalAssets: 20000000, // Estimated
                currentAssets: 8000000,
                fixedAssets: 8000000,
                financialAssets: 4000000,
                totalLiabilities: 18000000,
                currentLiabilities: 9000000,
                longTermDebt: 9000000,
                equity: 2000000,
                cashAndBank: 4000000,
                operatingCashFlow: data.ebitda * 0.8,
                barRevenue: data.revenue * 0.75,
                distilleryRevenue: data.revenue * 0.15,
                rtdRevenue: (data as any).rtdLaunch ? data.revenue * 0.08 : 0,
                consultingRevenue: data.revenue * 0.02,
                otherRevenue: data.revenue * 0.05,
                grossMargin,
                ebitdaMargin,
                netMargin: ((data.ebitda - 885000) * 0.85 / data.revenue) * 100,
                dataSource: 'Executive-Financial-Summary.md - Historical estimates',
                verified: false,
                notes: data.notes + ' | Some values estimated based on 2023 ratios',
            },
        });

        console.log(`✅ Created ${year} financial period`);
    }

    console.log('✅ Database seeding completed!');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error('❌ Error seeding database:', e);
        await prisma.$disconnect();
        process.exit(1);
    });
