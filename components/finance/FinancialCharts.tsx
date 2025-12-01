'use client';

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ComposedChart,
    Bar,
    Line,
    Legend
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

interface FinancialData {
    year: number;
    revenue: number;
    ebitda: number;
    netProfit: number;
    grossMargin: number;
    ebitdaMargin: number;
    netMargin: number;
}

interface FinancialChartsProps {
    data: FinancialData[];
}

export function FinancialCharts({ data }: FinancialChartsProps) {
    // Sort data by year ascending for charts
    const sortedData = [...data].sort((a, b) => a.year - b.year);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('nb-NO', {
            style: 'currency',
            currency: 'NOK',
            notation: 'compact',
            maximumFractionDigits: 1,
        }).format(value);
    };

    const formatPercent = (value: number) => `${value.toFixed(1)}%`;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Revenue Chart (Span 2) */}
            <Card className="lg:col-span-2 glass-card">
                <CardHeader>
                    <CardTitle>Revenue Performance</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-[350px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={sortedData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#34D399" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#34D399" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                <XAxis
                                    dataKey="year"
                                    stroke="#525252"
                                    tick={{ fill: '#737373', fontSize: 12 }}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    stroke="#525252"
                                    tick={{ fill: '#737373', fontSize: 12 }}
                                    tickFormatter={formatCurrency}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'rgba(23, 23, 23, 0.9)',
                                        borderColor: 'rgba(255,255,255,0.1)',
                                        color: '#fff',
                                        borderRadius: '8px',
                                        backdropFilter: 'blur(8px)'
                                    }}
                                    itemStyle={{ color: '#34D399' }}
                                    formatter={(value: number) => [formatCurrency(value), 'Revenue']}
                                    cursor={{ stroke: 'rgba(255,255,255,0.2)', strokeWidth: 1, strokeDasharray: '4 4' }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="revenue"
                                    stroke="#34D399"
                                    strokeWidth={2}
                                    fillOpacity={1}
                                    fill="url(#colorRevenue)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>

            {/* Profitability Mix (Span 1) */}
            <Card className="glass-card">
                <CardHeader>
                    <CardTitle>Profitability Mix</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-[350px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart data={sortedData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                <XAxis
                                    dataKey="year"
                                    stroke="#525252"
                                    tick={{ fill: '#737373', fontSize: 12 }}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    yAxisId="left"
                                    stroke="#525252"
                                    tick={{ fill: '#737373', fontSize: 12 }}
                                    tickFormatter={formatCurrency}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'rgba(23, 23, 23, 0.9)',
                                        borderColor: 'rgba(255,255,255,0.1)',
                                        color: '#fff',
                                        borderRadius: '8px',
                                        backdropFilter: 'blur(8px)'
                                    }}
                                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                />
                                <Bar
                                    yAxisId="left"
                                    dataKey="ebitda"
                                    name="EBITDA"
                                    fill="#F59E0B"
                                    radius={[4, 4, 0, 0]}
                                    barSize={20}
                                />
                                <Bar
                                    yAxisId="left"
                                    dataKey="netProfit"
                                    name="Net Profit"
                                    fill="#10B981"
                                    radius={[4, 4, 0, 0]}
                                    barSize={20}
                                />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
