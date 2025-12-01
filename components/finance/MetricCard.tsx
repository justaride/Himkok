import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { ArrowUpRight, ArrowDownRight, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
    title: string;
    value: string;
    trend?: number;
    trendLabel?: string;
    className?: string;
    chart?: React.ReactNode;
    icon?: React.ReactNode;
}

export function MetricCard({ title, value, trend, trendLabel, className, chart, icon }: MetricCardProps) {
    const isPositive = trend && trend >= 0;

    return (
        <Card className={cn("glass-card relative overflow-hidden group", className)}>
            <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                    <div className="space-y-1">
                        <CardTitle className="text-sm font-medium text-text-secondary uppercase tracking-wider">
                            {title}
                        </CardTitle>
                        <div className="text-3xl font-bold text-text-primary tracking-tight">
                            {value}
                        </div>
                    </div>
                    {icon && (
                        <div className="p-2 rounded-lg bg-white/5 text-text-secondary group-hover:text-primary transition-colors">
                            {icon}
                        </div>
                    )}
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex items-end justify-between">
                    {trend !== undefined && (
                        <div className={cn(
                            "flex items-center text-sm font-medium px-2 py-1 rounded-full",
                            isPositive ? "text-green-400 bg-green-400/10" : "text-red-400 bg-red-400/10"
                        )}>
                            {isPositive ? <ArrowUpRight className="h-4 w-4 mr-1" /> : <ArrowDownRight className="h-4 w-4 mr-1" />}
                            {Math.abs(trend).toFixed(1)}%
                            {trendLabel && <span className="ml-1 text-text-muted opacity-75">vs {trendLabel}</span>}
                        </div>
                    )}
                </div>
                {chart && (
                    <div className="mt-4 h-16 w-full opacity-50 group-hover:opacity-100 transition-opacity">
                        {chart}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
