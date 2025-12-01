'use client';

import { DevelopmentDisclaimer } from '@/components/ui/DevelopmentDisclaimer';
import { CourseStats } from '@/components/courses/CourseStats';
import { CourseCatalog } from '@/components/courses/CourseCatalog';
import { ConduitProjectStatus } from '@/components/courses/ConduitProjectStatus';
import { GraduationCap, Map } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export default function CoursesPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
            <DevelopmentDisclaimer />

            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-bold text-gradient mb-2">Himkok Academy</h1>
                    <p className="text-text-secondary text-lg">
                        Education, certification, and competence exchange.
                    </p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-elevated border border-white/10">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-text-primary">Est. 2024</span>
                </div>
            </div>

            {/* Stats Row */}
            <CourseStats />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Course Catalog (Span 2) */}
                <div className="lg:col-span-2">
                    <CourseCatalog />
                </div>

                {/* Conduit Project Status (Span 1) */}
                <div className="lg:col-span-1">
                    <ConduitProjectStatus />
                </div>
            </div>

            {/* Geographic Reach */}
            <Card className="glass-card">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Map className="h-5 w-5 text-primary" />
                        Geographic Reach
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {['Oslo', 'Stavanger', 'Trondheim', 'Bergen'].map((city) => (
                            <div key={city} className="p-4 rounded-xl bg-surface-elevated/50 border border-white/5 text-center hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-lg text-text-primary">{city}</h3>
                                <p className="text-xs text-text-secondary mt-1">Active Hub</p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
