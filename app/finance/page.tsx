'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { TrendingUp, TrendingDown, DollarSign, Users, PieChart, AlertTriangle, Info } from 'lucide-react';
import { FinancialCharts } from '@/components/finance/FinancialCharts';
import { MetricCard } from '@/components/finance/MetricCard';
import { DevelopmentDisclaimer } from '@/components/ui/DevelopmentDisclaimer';

interface FinancialPeriod {
    id: string;
    year: number;
    revenue: number;
    ebitda: number;
    netProfit: number;
    grossMargin: number;
    ebitdaMargin: number;
    netMargin: number;
    employees: number;
    verified: boolean;
    conflicts: any[];
}

export default function FinancialDashboard() {
    const [financialData, setFinancialData] = useState<FinancialPeriod[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedYear, setSelectedYear] = useState<number>(2023);

    useEffect(() => {
        fetchFinancialData();
    }, []);

    async function fetchFinancialData() {
        try {
            const response = await fetch('/api/financial');
            const result = await response.json();
            setFinancialData(result.data);
        } catch (error) {
            console.error('Error fetching financial data:', error);
        } finally {
            setLoading(false);
        }
    }

    const currentPeriod = financialData.find(p => p.year === selectedYear);
    const previousPeriod = financialData.find(p => p.year === selectedYear - 1);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('nb-NO', {
            style: 'currency',
            currency: 'NOK',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value);
    };

    const formatPercent = (value: number) => {
        return `${value.toFixed(1)}%`;
    };

    const calculateGrowth = (current: number, previous: number) => {
        if (!previous) return 0;
        return ((current - previous) / previous) * 100;
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-xl">Laster finansielle data...</div>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-bold text-gradient mb-2">Finance & Performance</h1>
                    <p className="text-text-secondary text-lg">
                        Real-time financial tracking and projections.
                    </p>
                </div>

                {/* Year Selector */}
                <div className="flex items-center gap-2 bg-surface-elevated/50 p-1 rounded-lg border border-white/5">
                    {financialData.map(period => (
                        <button
                            key={period.year}
                            onClick={() => setSelectedYear(period.year)}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${selectedYear === period.year
                                ? 'bg-primary text-white shadow-lg'
                                : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                                }`}
                        >
                            {period.year}
                        </button>
                    ))}
                </div>
            </div>

            {/* Disclaimer Banner */}
            <DevelopmentDisclaimer className="mb-4" />

            {/* Warnings */}
            {currentPeriod && currentPeriod.conflicts.length > 0 && (
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 flex items-center gap-3">
                    <AlertTriangle className="text-amber-500" size={20} />
                    <div>
                        <span className="font-semibold text-amber-500">{currentPeriod.conflicts.length} Data Conflicts Detected</span>
                        <span className="text-sm text-amber-500/80 ml-2">
                            - Please review source documents.
                        </span>
                    </div>
                </div>
            )}

            {/* Key Metrics Bento Grid */}
            {currentPeriod && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <MetricCard
                        title="Total Revenue"
                        value={formatCurrency(currentPeriod.revenue)}
                        trend={previousPeriod ? calculateGrowth(currentPeriod.revenue, previousPeriod.revenue) : undefined}
                        trendLabel={previousPeriod?.year.toString()}
                        icon={<DollarSign size={20} />}
                    />
                    <MetricCard
                        title="EBITDA"
                        value={formatCurrency(currentPeriod.ebitda)}
                        trend={previousPeriod ? calculateGrowth(currentPeriod.ebitda, previousPeriod.ebitda) : undefined}
                        trendLabel={previousPeriod?.year.toString()}
                        icon={<PieChart size={20} />}
                    />
                    <MetricCard
                        title="Net Profit"
                        value={formatCurrency(currentPeriod.netProfit)}
                        trend={previousPeriod ? calculateGrowth(currentPeriod.netProfit, previousPeriod.netProfit) : undefined}
                        trendLabel={previousPeriod?.year.toString()}
                        icon={<TrendingUp size={20} />}
                    />
                    <MetricCard
                        title="Employees"
                        value={currentPeriod.employees.toString()}
                        trend={0}
                        trendLabel="Stable"
                        icon={<Users size={20} />}
                    />
                </div>
            )}

            {/* Charts Section */}
            <FinancialCharts data={financialData} />

            {/* Segment Breakdown & Details */}
            {currentPeriod && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Revenue Segments */}
                    <Card className="lg:col-span-2 glass-card">
                        <CardHeader>
                            <CardTitle>Revenue Segmentation ({selectedYear})</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {[
                                    { label: 'Bar Operations', value: (currentPeriod as any).barRevenue || 0, color: 'bg-primary' },
                                    { label: 'RTD Products', value: (currentPeriod as any).rtdRevenue || 0, color: 'bg-secondary' },
                                    { label: 'Distillery Sales', value: (currentPeriod as any).distilleryRevenue || 0, color: 'bg-accent' },
                                    { label: 'Consulting', value: (currentPeriod as any).consultingRevenue || 0, color: 'bg-amber-500' },
                                ].map(segment => {
                                    const percentage = (segment.value / currentPeriod.revenue) * 100;
                                    return (
                                        <div key={segment.label}>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-sm font-medium text-text-primary">{segment.label}</span>
                                                <span className="text-sm text-text-secondary">
                                                    {formatCurrency(segment.value)} ({formatPercent(percentage)})
                                                </span>
                                            </div>
                                            <div className="w-full bg-surface-elevated rounded-full h-2 overflow-hidden">
                                                <div
                                                    className={`${segment.color} h-2 rounded-full transition-all duration-500 ease-out`}
                                                    style={{ width: `${percentage}%` }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Data Verification Status */}
                    <Card className="glass-card">
                        <CardHeader>
                            <CardTitle>Data Integrity</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between p-3 rounded-lg bg-surface-elevated/50 border border-white/5">
                                    <span className="text-sm text-text-secondary">Status</span>
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${currentPeriod.verified ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'}`}>
                                        {currentPeriod.verified ? 'VERIFIED' : 'ESTIMATED'}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-lg bg-surface-elevated/50 border border-white/5">
                                    <span className="text-sm text-text-secondary">Source</span>
                                    <span className="text-sm text-text-primary">{(currentPeriod as any).dataSource || 'Internal Records'}</span>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-lg bg-surface-elevated/50 border border-white/5">
                                    <span className="text-sm text-text-secondary">Last Audit</span>
                                    <span className="text-sm text-text-primary">Nov 2025</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
}
