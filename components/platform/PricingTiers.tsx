'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { CreditCard, QrCode, Crown, Building } from 'lucide-react';

export function PricingTiers() {
    const tiers = [
        {
            name: 'Product Buyers',
            price: 'Free (Limited)',
            desc: 'QR-code access to specific recipes via bottle purchase.',
            icon: QrCode,
            color: 'text-green-500',
            bg: 'bg-green-500/10'
        },
        {
            name: 'Subscription',
            price: 'Monthly / Annual',
            desc: 'Continuous access to full database with updates.',
            icon: CreditCard,
            color: 'text-blue-500',
            bg: 'bg-blue-500/10'
        },
        {
            name: 'Lifetime',
            price: '10,000 NOK',
            desc: 'One-time purchase for lifetime access.',
            icon: Crown,
            color: 'text-amber-500',
            bg: 'bg-amber-500/10'
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            desc: 'Tailored packages for hotels, restaurants, and chains.',
            icon: Building,
            color: 'text-purple-500',
            bg: 'bg-purple-500/10'
        }
    ];

    return (
        <Card className="glass-card">
            <CardHeader>
                <CardTitle>Access Levels & Pricing</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {tiers.map((tier, index) => (
                        <div key={index} className="p-4 rounded-xl bg-surface-elevated/50 border border-white/5 hover:bg-white/5 transition-colors group">
                            <div className="flex justify-between items-start mb-3">
                                <div className={`p-2 rounded-lg ${tier.bg} ${tier.color}`}>
                                    <tier.icon size={20} />
                                </div>
                                <span className="text-xs font-bold px-2 py-1 rounded-full bg-white/5 text-text-primary">
                                    {tier.price}
                                </span>
                            </div>
                            <h3 className="font-bold text-lg text-text-primary mb-1">{tier.name}</h3>
                            <p className="text-sm text-text-secondary">{tier.desc}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
