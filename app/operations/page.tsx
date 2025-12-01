import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import {
    Settings,
    Zap,
    Users,
    Truck,
    Leaf,
    ShieldCheck,
    BarChart3,
    Clock,
    Droplets
} from 'lucide-react';

export default function OperationsPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-text-primary mb-4">Operations</h1>
                <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                    Operational Excellence & Supply Chain Management
                </p>
                <p className="mt-4 text-lg text-text-secondary max-w-4xl mx-auto">
                    Himkok operates a unique bar-distillery hybrid model, refining operations for efficiency,
                    consistency, and quality. A remarkable 85% of all beverages served are produced in-house.
                </p>
            </div>

            {/* Operational Excellence Grid */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-text-primary mb-8 flex items-center gap-3">
                    <Settings className="h-8 w-8 text-primary" />
                    Operational Excellence
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {/* Vertical Integration */}
                    <Card>
                        <CardHeader>
                            <div className="w-12 h-12 bg-surface-elevated rounded-lg flex items-center justify-center mb-4">
                                <Droplets className="h-6 w-6 text-accent" />
                            </div>
                            <CardTitle>Vertical Integration</CardTitle>
                            <CardDescription>Bar-Distillery Hybrid</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-text-secondary mb-4">
                                Minimizes reliance on external suppliers. Quality control is managed on-site from start to finish.
                            </p>
                            <div className="flex items-center gap-2 text-primary font-bold">
                                <span className="text-2xl">85%</span>
                                <span className="text-sm font-normal text-text-secondary">In-house production</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Taptails System */}
                    <Card>
                        <CardHeader>
                            <div className="w-12 h-12 bg-surface-elevated rounded-lg flex items-center justify-center mb-4">
                                <Zap className="h-6 w-6 text-yellow-500" />
                            </div>
                            <CardTitle>"Taptails" System</CardTitle>
                            <CardDescription>High-Volume Efficiency</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-text-secondary mb-4">
                                Cocktails on tap allow for rapid service without sacrificing quality.
                                Drinks are pre-batched, carbonated, or kegged.
                            </p>
                            <div className="flex items-center gap-2 text-primary font-bold">
                                <span className="text-2xl">&lt;1 min</span>
                                <span className="text-sm font-normal text-text-secondary">Service time per drink</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Lean Staffing */}
                    <Card>
                        <CardHeader>
                            <div className="w-12 h-12 bg-surface-elevated rounded-lg flex items-center justify-center mb-4">
                                <Users className="h-6 w-6 text-blue-500" />
                            </div>
                            <CardTitle>Lean Staffing</CardTitle>
                            <CardDescription>Optimized Labor</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-text-secondary mb-4">
                                Cross-trained staff and distinct service zones allow a small team to handle high capacity.
                            </p>
                            <div className="flex items-center gap-2 text-primary font-bold">
                                <span className="text-2xl">13</span>
                                <span className="text-sm font-normal text-text-secondary">Staff for 450 guests</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Supply Chain Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-text-primary mb-8 flex items-center gap-3">
                    <Truck className="h-8 w-8 text-primary" />
                    Supply Chain & Logistics
                </h2>
                <div className="bg-surface-elevated rounded-xl p-8 border border-border">
                    <div className="grid gap-8 md:grid-cols-2">
                        <div>
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Leaf className="h-5 w-5 text-success" />
                                "Farm-to-Shaker" Sourcing
                            </h3>
                            <p className="text-text-secondary mb-6">
                                Himkok's supply chain is short and resilient, relying on close relationships with local producers.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                                    <div>
                                        <span className="font-medium text-text-primary">Local Farms</span>
                                        <p className="text-sm text-text-secondary">Direct sourcing of fruits, herbs, and honey from urban bee farms.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                                    <div>
                                        <span className="font-medium text-text-primary">Potato Spirit Base</span>
                                        <p className="text-sm text-text-secondary">Using leftover local potatoes to distill ethanol, reducing waste.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                                    <div>
                                        <span className="font-medium text-text-primary">On-Site Greenhouse</span>
                                        <p className="text-sm text-text-secondary">Hydroponic systems for fresh herbs year-round.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-surface p-6 rounded-lg border border-border">
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <BarChart3 className="h-5 w-5 text-accent" />
                                Inventory Management
                            </h3>
                            <p className="text-text-secondary mb-4">
                                Powered by <strong>Trivec POS</strong> integration.
                            </p>
                            <ul className="space-y-3 text-sm text-text-secondary">
                                <li className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" /> Real-time stock tracking
                                </li>
                                <li className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" /> Automated re-ordering triggers
                                </li>
                                <li className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" /> Ingredient usage monitoring (Spirits to Garnishes)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Control Section */}
            <section>
                <h2 className="text-3xl font-bold text-text-primary mb-8 flex items-center gap-3">
                    <ShieldCheck className="h-8 w-8 text-primary" />
                    Quality Control
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Batch Testing</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-text-secondary">
                                Every batch is logged with production date and flavor profile.
                                Regular tasting ensures that a guest's favorite drink in January tastes identical in June.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Shelf Stability</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-text-secondary">
                                Cocktails are prepared "vacuum bag style" (sous-vide technique) to prevent oxidation,
                                designed to last at least one year without degradation.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
