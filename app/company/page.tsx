import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import {
    Building2,
    Factory,
    GlassWater,
    Users,
    Globe,
    Award,
    TrendingUp,
    Recycle,
    Sprout,
    Truck
} from 'lucide-react';
import { DevelopmentDisclaimer } from '@/components/ui/DevelopmentDisclaimer';

export default function CompanyPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <DevelopmentDisclaimer className="mb-8" />
            {/* Hero Section */}
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-text-primary mb-4">Himkok</h1>
                <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                    "Moonshine" in Norwegian. Established 2015.
                </p>
                <p className="mt-4 text-lg text-text-secondary max-w-4xl mx-auto">
                    Himkok has established itself as one of the world's premier cocktail destinations.
                    The Oslo-based business combines a craft cocktail bar, an on-site micro-distillery,
                    a branded RTD product line, and consultancy services.
                </p>
            </div>

            {/* Key Stats Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
                <Card>
                    <CardContent className="pt-6 flex items-center space-x-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                            <Award className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <p className="text-sm text-text-secondary">Global Ranking</p>
                            <p className="text-2xl font-bold text-text-primary">#10</p>
                            <p className="text-xs text-text-muted">World's 50 Best Bars (2023)</p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6 flex items-center space-x-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                            <TrendingUp className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <p className="text-sm text-text-secondary">Annual Revenue</p>
                            <p className="text-2xl font-bold text-text-primary">48 MNOK</p>
                            <p className="text-xs text-text-muted">Approx. $4.6M USD</p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6 flex items-center space-x-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                            <Factory className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <p className="text-sm text-text-secondary">Production</p>
                            <p className="text-2xl font-bold text-text-primary">80%</p>
                            <p className="text-xs text-text-muted">Spirits produced in-house</p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6 flex items-center space-x-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                            <Users className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <p className="text-sm text-text-secondary">Team</p>
                            <p className="text-2xl font-bold text-text-primary">40+</p>
                            <p className="text-xs text-text-muted">Employees</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Business Model Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-text-primary mb-8">Business Model</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Bar Operations */}
                    <Card className="h-full">
                        <CardHeader>
                            <div className="w-12 h-12 bg-surface-elevated rounded-lg flex items-center justify-center mb-4">
                                <GlassWater className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle>Bar Operations</CardTitle>
                            <CardDescription>The Core Experience</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-text-secondary">
                                <li>• Main Distillery Bar (High-end)</li>
                                <li>• Taptail Bar (High-volume)</li>
                                <li>• Cider Bar (Seasonal outdoor)</li>
                                <li>• ~75% of total revenue</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Distillery */}
                    <Card className="h-full">
                        <CardHeader>
                            <div className="w-12 h-12 bg-surface-elevated rounded-lg flex items-center justify-center mb-4">
                                <Factory className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle>Distillery</CardTitle>
                            <CardDescription>Vertical Integration</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-text-secondary">
                                <li>• Micro-distillery on-site</li>
                                <li>• Aquavit, Gin, Vodka</li>
                                <li>• 10,000L annual production</li>
                                <li>• 10-15% of revenue</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* RTD Products */}
                    <Card className="h-full">
                        <CardHeader>
                            <div className="w-12 h-12 bg-surface-elevated rounded-lg flex items-center justify-center mb-4">
                                <Truck className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle>RTD Line</CardTitle>
                            <CardDescription>Retail Expansion</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-text-secondary">
                                <li>• Canned Cocktails (Mule, Paloma)</li>
                                <li>• Nationwide distribution (493 stores)</li>
                                <li>• Partnership with Aass Brewery</li>
                                <li>• High growth potential</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Consultancy */}
                    <Card className="h-full">
                        <CardHeader>
                            <div className="w-12 h-12 bg-surface-elevated rounded-lg flex items-center justify-center mb-4">
                                <Building2 className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle>Consultancy</CardTitle>
                            <CardDescription>Expertise Monetization</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-text-secondary">
                                <li>• Menu development</li>
                                <li>• Staff training</li>
                                <li>• Bar design</li>
                                <li>• 5-10% of revenue</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Value Chain Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-text-primary mb-8">Value Chain & Operations</h2>
                <div className="bg-surface-elevated rounded-xl p-8 border border-border">
                    <div className="grid gap-12 md:grid-cols-3 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-border -z-10" />

                        {/* Sourcing */}
                        <div className="relative">
                            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-6 mx-auto z-10">1</div>
                            <h3 className="text-xl font-semibold text-center mb-4">Sourcing</h3>
                            <div className="bg-surface p-6 rounded-lg border border-border">
                                <div className="flex items-center justify-center mb-4">
                                    <Sprout className="h-8 w-8 text-success" />
                                </div>
                                <h4 className="font-medium text-center mb-2">"Farm-to-Shaker"</h4>
                                <p className="text-sm text-text-secondary text-center mb-4">
                                    Local sourcing of ingredients with relationships with farmers, foragers, and producers.
                                </p>
                                <ul className="text-sm text-text-secondary space-y-1">
                                    <li>• Local berries & herbs</li>
                                    <li>• On-site greenhouse</li>
                                    <li>• Norwegian potato spirit base</li>
                                </ul>
                            </div>
                        </div>

                        {/* Production */}
                        <div className="relative">
                            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-6 mx-auto z-10">2</div>
                            <h3 className="text-xl font-semibold text-center mb-4">Production</h3>
                            <div className="bg-surface p-6 rounded-lg border border-border">
                                <div className="flex items-center justify-center mb-4">
                                    <Factory className="h-8 w-8 text-accent" />
                                </div>
                                <h4 className="font-medium text-center mb-2">In-House Distillation</h4>
                                <p className="text-sm text-text-secondary text-center mb-4">
                                    Small-batch distillation occurs on-site in a space under 5 square meters.
                                </p>
                                <ul className="text-sm text-text-secondary space-y-1">
                                    <li>• 180L Hybrid Copper Still</li>
                                    <li>• Vacuum distillation</li>
                                    <li>• Zero-waste philosophy</li>
                                </ul>
                            </div>
                        </div>

                        {/* Distribution */}
                        <div className="relative">
                            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-6 mx-auto z-10">3</div>
                            <h3 className="text-xl font-semibold text-center mb-4">Distribution</h3>
                            <div className="bg-surface p-6 rounded-lg border border-border">
                                <div className="flex items-center justify-center mb-4">
                                    <Globe className="h-8 w-8 text-primary" />
                                </div>
                                <h4 className="font-medium text-center mb-2">Multi-Channel</h4>
                                <p className="text-sm text-text-secondary text-center mb-4">
                                    Serving guests on-site and reaching consumers nationwide through retail.
                                </p>
                                <ul className="text-sm text-text-secondary space-y-1">
                                    <li>• On-site service (450 capacity)</li>
                                    <li>• Grocery retail (RTD)</li>
                                    <li>• Norwegian Air flights</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sustainability Highlight */}
            <section>
                <div className="bg-success/10 rounded-xl p-8 flex flex-col md:flex-row items-center gap-8">
                    <div className="p-6 bg-success/20 rounded-full">
                        <Recycle className="h-12 w-12 text-success" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-text-primary mb-2">Sustainability Leadership</h2>
                        <p className="text-text-secondary mb-4">
                            Winner of the inaugural Ketel One Sustainable Bar Award (2018). Himkok's operations are built on a zero-waste philosophy.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-3 py-1 bg-surface rounded-full text-sm font-medium text-text-primary border border-border">85% In-House Spirits</span>
                            <span className="px-3 py-1 bg-surface rounded-full text-sm font-medium text-text-primary border border-border">Hydroponic Greenhouse</span>
                            <span className="px-3 py-1 bg-surface rounded-full text-sm font-medium text-text-primary border border-border">Circular Ingredient Use</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
