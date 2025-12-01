import { MetricCard } from '@/components/finance/MetricCard';
import { SwotMatrix } from '@/components/strategic/SwotMatrix';
import { InitiativeTracker } from '@/components/strategic/InitiativeTracker';
import { MarketPosition } from '@/components/strategic/MarketPosition';
import { Target, TrendingUp, Users, Award } from 'lucide-react';
import { DevelopmentDisclaimer } from '@/components/ui/DevelopmentDisclaimer';

export default function StrategicPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
            <DevelopmentDisclaimer />
            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-bold text-gradient mb-2">Strategic Command</h1>
                    <p className="text-text-secondary text-lg">
                        Long-term planning, market analysis, and growth initiatives.
                    </p>
                </div>
                <div className="text-right">
                    <p className="text-sm text-text-muted">Planning Horizon</p>
                    <p className="text-lg font-bold text-text-primary">2024 - 2026</p>
                </div>
            </div>

            {/* Key Strategic Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard
                    title="Global Ranking"
                    value="#10"
                    trend={2}
                    trendLabel="Positions Gained"
                    icon={<Award size={20} />}
                />
                <MetricCard
                    title="Brand Equity (Est.)"
                    value="30M NOK"
                    trend={15}
                    trendLabel="YoY Growth"
                    icon={<TrendingUp size={20} />}
                />
                <MetricCard
                    title="Market Share (Oslo)"
                    value="35%"
                    trend={2.5}
                    trendLabel="Premium Segment"
                    icon={<Target size={20} />}
                />
                <MetricCard
                    title="Guest Satisfaction"
                    value="4.9"
                    trend={0}
                    trendLabel="NPS Score"
                    icon={<Users size={20} />}
                />
            </div>

            {/* Main Strategic Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[450px]">
                {/* SWOT Matrix (Span 2) */}
                <div className="lg:col-span-2 h-full">
                    <SwotMatrix />
                </div>

                {/* Market Position (Span 1) */}
                <div className="lg:col-span-1 h-full">
                    <MarketPosition />
                </div>
            </div>

            {/* Initiatives & Roadmap */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 h-full">
                    <InitiativeTracker />
                </div>

                <div className="lg:col-span-2 glass-card p-6 rounded-xl border border-white/10">
                    <h3 className="text-lg font-semibold mb-4">Executive Summary</h3>
                    <p className="text-text-secondary leading-relaxed mb-4">
                        Himkok is positioning for major growth with the <strong>Northern Whiskey Distillery</strong> project and targeted RTD expansion into <strong>Denmark and the UK</strong>.
                        Our "Sustainability 2.0" initiative continues to lead the industry, reinforcing our brand's core values.
                    </p>
                    <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                        <p className="text-sm text-blue-400 font-medium">
                            Focus Area Q1 2025: Whiskey Distillery Planning & RTD Export Logistics.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
