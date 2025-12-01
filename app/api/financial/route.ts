import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

/**
 * GET /api/financial
 * Fetch all financial periods, optionally filtered by year
 */
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const year = searchParams.get('year');
        const verified = searchParams.get('verified');

        const where: any = {};
        if (year) where.year = parseInt(year);
        if (verified !== null) where.verified = verified === 'true';

        const financialPeriods = await prisma.financialPeriod.findMany({
            where,
            include: {
                conflicts: {
                    where: { resolved: false },
                },
            },
            orderBy: [
                { year: 'desc' },
                { quarter: 'desc' },
            ],
        });

        return NextResponse.json({ data: financialPeriods });
    } catch (error) {
        console.error('Error fetching financial data:', error);
        return NextResponse.json(
            { error: 'Failed to fetch financial data' },
            { status: 500 }
        );
    }
}

/**
 * POST /api/financial
 * Create a new financial period entry
 */
export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Calculate KPIs if not provided
        if (!body.grossMargin && body.revenue && body.grossProfit) {
            body.grossMargin = (body.grossProfit / body.revenue) * 100;
        }
        if (!body.ebitdaMargin && body.revenue && body.ebitda) {
            body.ebitdaMargin = (body.ebitda / body.revenue) * 100;
        }
        if (!body.netMargin && body.revenue && body.netProfit) {
            body.netMargin = (body.netProfit / body.revenue) * 100;
        }
        if (!body.debtToEquity && body.totalLiabilities && body.equity) {
            body.debtToEquity = body.totalLiabilities / body.equity;
        }
        if (!body.currentRatio && body.currentAssets && body.currentLiabilities) {
            body.currentRatio = body.currentAssets / body.currentLiabilities;
        }

        const financialPeriod = await prisma.financialPeriod.create({
            data: body,
        });

        return NextResponse.json({ data: financialPeriod }, { status: 201 });
    } catch (error) {
        console.error('Error creating financial period:', error);
        return NextResponse.json(
            { error: 'Failed to create financial period' },
            { status: 500 }
        );
    }
}
