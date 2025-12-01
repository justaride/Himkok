import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import {
  Briefcase,
  Target,
  PresentationIcon,
  Database,
  FileText,
  TrendingUp,
  Users,
  Calendar,
  ArrowUpRight,
  Plus,
  Search
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          Good afternoon, <span className="text-gradient">Gabriel</span>
        </h1>
        <p className="text-text-secondary text-lg">
          Here's what's happening at Himkok today.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[180px]">

        {/* Large Tile: Revenue (Span 2x2) */}
        <Card className="md:col-span-2 md:row-span-2 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardDescription>Total Revenue (YTD)</CardDescription>
                <CardTitle className="text-4xl font-bold mt-2">48.5 MNOK</CardTitle>
              </div>
              <div className="flex items-center text-green-500 bg-green-500/10 px-2 py-1 rounded-full text-sm font-medium">
                <TrendingUp className="h-4 w-4 mr-1" />
                +12.5%
              </div>
            </div>
          </CardHeader>
          <CardContent className="absolute bottom-0 left-0 right-0 h-32">
            {/* Abstract Chart Visualization */}
            <div className="flex items-end justify-between h-full px-6 pb-6 gap-2">
              {[40, 65, 50, 80, 60, 90, 75, 95, 85, 100].map((h, i) => (
                <div
                  key={i}
                  className="w-full bg-primary/20 rounded-t-sm hover:bg-primary/40 transition-colors"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Medium Tile: Active Operations (Span 1x1) */}
        <Card className="group hover:border-primary/30 transition-colors">
          <CardHeader>
            <div className="flex justify-between items-center mb-2">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                <Briefcase className="h-5 w-5" />
              </div>
              <ArrowUpRight className="h-4 w-4 text-text-muted group-hover:text-primary transition-colors" />
            </div>
            <CardTitle className="text-2xl font-bold">12</CardTitle>
            <CardDescription>Active Operations</CardDescription>
          </CardHeader>
        </Card>

        {/* Medium Tile: Research (Span 1x1) */}
        <Card className="group hover:border-primary/30 transition-colors">
          <CardHeader>
            <div className="flex justify-between items-center mb-2">
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
                <Database className="h-5 w-5" />
              </div>
              <ArrowUpRight className="h-4 w-4 text-text-muted group-hover:text-primary transition-colors" />
            </div>
            <CardTitle className="text-2xl font-bold">156</CardTitle>
            <CardDescription>Research Entries</CardDescription>
          </CardHeader>
        </Card>

        {/* Tall Tile: Upcoming Tasks (Span 1x2) */}
        <Card className="md:col-span-1 md:row-span-2 flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-accent" />
              Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            <div className="space-y-4">
              {[
                { title: 'Strategic Review', time: '10:00 AM', tag: 'Strategy' },
                { title: 'Partner Lunch', time: '12:30 PM', tag: 'External' },
                { title: 'Team Sync', time: '2:00 PM', tag: 'Internal' },
                { title: 'Brand Workshop', time: '4:00 PM', tag: 'Creative' },
              ].map((task, i) => (
                <div key={i} className="flex gap-3 items-start group/item">
                  <div className="flex flex-col items-center gap-1 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <div className="w-0.5 h-full bg-border group-last/item:hidden" />
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">{task.title}</p>
                    <p className="text-xs text-text-secondary">{task.time}</p>
                    <span className="inline-block mt-1 text-[10px] px-1.5 py-0.5 rounded bg-surface border border-border text-text-muted">
                      {task.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Wide Tile: Quick Actions (Span 2x1) */}
        <Card className="md:col-span-2 flex items-center justify-between px-6">
          <div className="flex gap-4">
            <Link href="/pitch-decks" className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-2xl bg-surface border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-surface transition-all shadow-sm">
                <PresentationIcon className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium text-text-secondary group-hover:text-text-primary">New Deck</span>
            </Link>
            <Link href="/meetings" className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-2xl bg-surface border border-border flex items-center justify-center group-hover:bg-green-500 group-hover:text-surface transition-all shadow-sm">
                <FileText className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium text-text-secondary group-hover:text-text-primary">Log Meeting</span>
            </Link>
            <Link href="/research" className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-2xl bg-surface border border-border flex items-center justify-center group-hover:bg-blue-500 group-hover:text-surface transition-all shadow-sm">
                <Plus className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium text-text-secondary group-hover:text-text-primary">Add Data</span>
            </Link>
          </div>
          <div className="h-12 w-px bg-border mx-4" />
          <div className="flex-1">
            <p className="text-sm font-medium text-text-primary mb-1">Quick Actions</p>
            <p className="text-xs text-text-secondary">Common tasks and workflows</p>
          </div>
        </Card>

        {/* Medium Tile: Strategy (Span 1x1) */}
        <Card className="group hover:border-primary/30 transition-colors">
          <CardHeader>
            <div className="flex justify-between items-center mb-2">
              <div className="p-2 bg-red-500/10 rounded-lg text-red-500">
                <Target className="h-5 w-5" />
              </div>
              <ArrowUpRight className="h-4 w-4 text-text-muted group-hover:text-primary transition-colors" />
            </div>
            <CardTitle className="text-2xl font-bold">75%</CardTitle>
            <CardDescription>Goal Completion</CardDescription>
          </CardHeader>
        </Card>

      </div>
    </div>
  );
}
