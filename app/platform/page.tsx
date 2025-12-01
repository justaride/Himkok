'use client';

import { DevelopmentDisclaimer } from '@/components/ui/DevelopmentDisclaimer';
import { PlatformFeatures } from '@/components/platform/PlatformFeatures';
import { PricingTiers } from '@/components/platform/PricingTiers';
import { B2BSolutions } from '@/components/platform/B2BSolutions';
import { ProjectStatus } from '@/components/platform/ProjectStatus';
import { Laptop, Rocket } from 'lucide-react';

export default function PlatformPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
            <DevelopmentDisclaimer />

            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-bold text-gradient mb-2">Digital Platform</h1>
                    <p className="text-text-secondary text-lg">
                        The future of cocktail education and recipe management.
                    </p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-elevated border border-white/10">
                    <Rocket className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium text-text-primary">Project: Portal</span>
                </div>
            </div>

            {/* Project Status - Prominent due to early stage */}
            <ProjectStatus />

            {/* Core Features */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-text-primary flex items-center gap-2">
                    <Laptop className="h-6 w-6 text-primary" />
                    Core Functions
                </h2>
                <PlatformFeatures />
            </div>

            {/* Pricing & Access */}
            <PricingTiers />

            {/* B2B & Marketing */}
            <B2BSolutions />
        </div>
    );
}
