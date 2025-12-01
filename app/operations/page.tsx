import { MetricCard } from '@/components/finance/MetricCard';
import { SupplyChainWidget } from '@/components/operations/SupplyChainWidget';
import { ProductionStatus } from '@/components/operations/ProductionStatus';
import { Droplets, Zap, Users, Box, BarChart3 } from 'lucide-react';
import { DevelopmentDisclaimer } from '@/components/ui/DevelopmentDisclaimer';

export default function OperationsPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
            <DevelopmentDisclaimer />
            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-bold text-gradient mb-2">Operations Center</h1>
                    <p className="text-text-secondary text-lg">
                        Real-time oversight of production, logistics, and efficiency.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium text-green-500">Systems Nominal</span>
                </div>
            </div>

            {/* Key Metrics Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard
                    title="Annual Production"
                    value="10,000L"
                    trend={12}
                    trendLabel="In-House Capacity"
                    icon={<Droplets size={20} />}
                />
                <MetricCard
                    title="RTD Volume"
                    value="100k L"
                    trend={80}
                    trendLabel="YoY Growth"
                    icon={<Box size={20} />}
                />
                <MetricCard
                    title="Staff Efficiency"
                    value="1.26M NOK"
                    trend={5}
                    trendLabel="Rev/Employee"
                    icon={<Users size={20} />}
                />
                <MetricCard
                    title="Inventory Turnover"
                    value="4.6x"
                    trend={0}
                    trendLabel="Annual Rate"
                    icon={<Box size={20} />}
                />
            </div>

            {/* Main Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[400px]">
                {/* Supply Chain Visualization (Span 2) */}
                <div className="lg:col-span-2 h-full">
                    <SupplyChainWidget />
                </div>

                {/* Production Status (Span 1) */}
                <div className="lg:col-span-1 h-full">
                    <ProductionStatus />
                </div>
            </div>

            {/* Inventory & Logistics Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 glass-card p-6 rounded-xl border border-white/10">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-primary" />
                        Inventory Alerts
                    </h3>
                    <div className="space-y-3">
                        {[
                            { item: 'Potato Spirit Base', level: 'Low (15%)', status: 'Ordering' },
                            { item: 'Fresh Mint', level: 'Critical (5%)', status: 'Urgent' },
                            { item: 'Glass Bottles', level: 'OK (85%)', status: 'Stable' },
                        ].map((alert, i) => (
                            <div key={i} className="flex items-center justify-between text-sm p-2 rounded bg-white/5">
                                <span className="text-text-primary">{alert.item}</span>
                                <div className="text-right">
                                    <span className={`block font-medium ${alert.status === 'Urgent' ? 'text-red-500' : alert.status === 'Ordering' ? 'text-amber-500' : 'text-green-500'}`}>
                                        {alert.level}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-2 glass-card p-6 rounded-xl border border-white/10">
                    <h3 className="text-lg font-semibold mb-4">Operational Efficiency Notes</h3>
                    <p className="text-text-secondary leading-relaxed">
                        <strong>Aass Brewery Partnership:</strong> RTD production (Oslo Mule, Paloma) is scaling efficiently with zero capex.
                        <strong>In-House Distillery:</strong> Operating at near capacity (10,000L/yr). Planning for Northern Whiskey Distillery expansion.
                        <strong>Staffing:</strong> 42 employees with high revenue/employee ratio (1.26M NOK).
                    </p>
                </div>
            </div>
        </div >
    );
}
