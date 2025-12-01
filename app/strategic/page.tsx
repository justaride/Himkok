import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Target, TrendingUp, Shield, AlertTriangle, Zap, Globe, Leaf, Award } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export default function StrategicPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-text-primary mb-4">Strategic Analysis</h1>
                <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                    SWOT Analysis & Strategic Initiatives (2024-2026)
                </p>
            </div>

            {/* SWOT Analysis */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-text-primary mb-8 flex items-center gap-3">
                    <Shield className="h-8 w-8 text-primary" />
                    SWOT Analysis
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {/* Strengths */}
                    <Card className="border-l-4 border-l-green-500">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-green-500">
                                <Zap className="h-5 w-5" /> Strengths
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-text-secondary">
                                <li className="flex items-start gap-2">• <strong>Brand Power:</strong> #10 World's 50 Best Bars.</li>
                                <li className="flex items-start gap-2">• <strong>Vertical Integration:</strong> 85% in-house production (High margins).</li>
                                <li className="flex items-start gap-2">• <strong>Sustainability:</strong> "Farm-to-shaker" & zero-waste reputation.</li>
                                <li className="flex items-start gap-2">• <strong>Volume:</strong> High-capacity venue (450 pax) with speed-service systems.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Weaknesses */}
                    <Card className="border-l-4 border-l-yellow-500">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-yellow-500">
                                <AlertTriangle className="h-5 w-5" /> Weaknesses
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-text-secondary">
                                <li className="flex items-start gap-2">• <strong>Location Dependence:</strong> Heavy reliance on Oslo tourism/nightlife.</li>
                                <li className="flex items-start gap-2">• <strong>Capacity Limits:</strong> Physical venue cannot scale further.</li>
                                <li className="flex items-start gap-2">• <strong>Staffing:</strong> High skill requirement makes recruitment challenging.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Opportunities */}
                    <Card className="border-l-4 border-l-blue-500">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-blue-500">
                                <Globe className="h-5 w-5" /> Opportunities
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-text-secondary">
                                <li className="flex items-start gap-2">• <strong>RTD Expansion:</strong> Scaling canned cocktails to international retail.</li>
                                <li className="flex items-start gap-2">• <strong>Consultancy:</strong> Monetizing expertise for hotel chains/brands.</li>
                                <li className="flex items-start gap-2">• <strong>Global Pop-ups:</strong> "Himkok on Tour" to build global brand equity.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Threats */}
                    <Card className="border-l-4 border-l-red-500">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-red-500">
                                <Shield className="h-5 w-5" /> Threats
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-text-secondary">
                                <li className="flex items-start gap-2">• <strong>Regulation:</strong> Strict Norwegian alcohol advertising laws.</li>
                                <li className="flex items-start gap-2">• <strong>Competition:</strong> Emerging high-end cocktail bars in Nordics.</li>
                                <li className="flex items-start gap-2">• <strong>Economic:</strong> Inflation impacting discretionary spending.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Strategic Initiatives */}
            <section>
                <h2 className="text-3xl font-bold text-text-primary mb-8 flex items-center gap-3">
                    <Target className="h-8 w-8 text-primary" />
                    Strategic Initiatives
                </h2>
                <div className="space-y-6">
                    {/* Initiative 1 */}
                    <Card>
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="text-xl mb-2">Global RTD Expansion</CardTitle>
                                    <CardDescription>Scale canned cocktail distribution to EU & Asia.</CardDescription>
                                </div>
                                <Badge className="bg-blue-500">High Priority</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-6 text-sm text-text-secondary mb-4">
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="h-4 w-4 text-green-500" />
                                    <span>Target: 50M NOK Revenue</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Globe className="h-4 w-4 text-blue-500" />
                                    <span>Markets: Norway, UK, Germany</span>
                                </div>
                            </div>
                            <div className="w-full bg-surface-elevated rounded-full h-2">
                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '40%' }} />
                            </div>
                            <p className="text-xs text-text-muted mt-2 text-right">40% Complete</p>
                        </CardContent>
                    </Card>

                    {/* Initiative 2 */}
                    <Card>
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="text-xl mb-2">Sustainability 2.0</CardTitle>
                                    <CardDescription>Achieve 100% carbon neutrality and zero-waste certification.</CardDescription>
                                </div>
                                <Badge className="bg-green-500">Ongoing</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-6 text-sm text-text-secondary mb-4">
                                <div className="flex items-center gap-2">
                                    <Leaf className="h-4 w-4 text-green-500" />
                                    <span>Target: Zero Waste Certified</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Award className="h-4 w-4 text-yellow-500" />
                                    <span>Status: Auditing Phase</span>
                                </div>
                            </div>
                            <div className="w-full bg-surface-elevated rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }} />
                            </div>
                            <p className="text-xs text-text-muted mt-2 text-right">75% Complete</p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
