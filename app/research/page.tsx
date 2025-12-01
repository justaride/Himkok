import { PrismaClient } from '@prisma/client';
import { ResearchCard } from '@/components/research/ResearchCard';
import { Search, Database, FileText, BarChart3 } from 'lucide-react';
import { DevelopmentDisclaimer } from '@/components/ui/DevelopmentDisclaimer';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

export default async function ResearchPage({
    searchParams,
}: {
    searchParams: { q?: string };
}) {
    const query = searchParams.q || '';

    // Fetch data
    const entries = await prisma.researchEntry.findMany({
        where: {
            OR: [
                { title: { contains: query, mode: 'insensitive' } },
                { summary: { contains: query, mode: 'insensitive' } },
                { content: { contains: query, mode: 'insensitive' } },
            ],
        },
        include: {
            dataPoints: true,
        },
        orderBy: {
            dateAdded: 'desc',
        },
    });

    const totalPoints = await prisma.researchDataPoint.count();

    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <DevelopmentDisclaimer className="mb-8" />
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-text-primary mb-2">Research Intelligence</h1>
                <p className="text-text-secondary">
                    Centralized knowledge base and strategic analysis.
                </p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-surface-elevated p-4 rounded-lg border border-border flex items-center gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-full">
                        <FileText className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                        <p className="text-sm text-text-secondary">Total Reports</p>
                        <p className="text-2xl font-bold text-text-primary">{entries.length}</p>
                    </div>
                </div>
                <div className="bg-surface-elevated p-4 rounded-lg border border-border flex items-center gap-4">
                    <div className="p-3 bg-green-500/10 rounded-full">
                        <Database className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                        <p className="text-sm text-text-secondary">Data Points</p>
                        <p className="text-2xl font-bold text-text-primary">{totalPoints}</p>
                    </div>
                </div>
                <div className="bg-surface-elevated p-4 rounded-lg border border-border flex items-center gap-4">
                    <div className="p-3 bg-purple-500/10 rounded-full">
                        <BarChart3 className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                        <p className="text-sm text-text-secondary">Intelligence Coverage</p>
                        <p className="text-2xl font-bold text-text-primary">
                            {Math.round((entries.filter(e => e.dataPoints.length > 0).length / entries.length) * 100)}%
                        </p>
                    </div>
                </div>
            </div>

            {/* Search Bar */}
            <div className="mb-8 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-text-muted" />
                </div>
                <form>
                    <input
                        type="text"
                        name="q"
                        placeholder="Search reports, metrics, or keywords..."
                        defaultValue={query}
                        className="block w-full pl-10 pr-3 py-3 border border-border rounded-lg leading-5 bg-surface-elevated text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-all"
                    />
                </form>
            </div>

            {/* Results Grid */}
            {entries.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {entries.map((entry) => (
                        <ResearchCard key={entry.id} entry={entry} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-text-secondary">No research entries found matching your query.</p>
                </div>
            )}
        </div>
    );
}
