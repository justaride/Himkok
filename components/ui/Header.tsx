'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Briefcase,
    Target,
    PresentationIcon,
    Database,
    FileText,
    Users,
    Menu,
    X,
    Home,
    TrendingUp,
    Package,
    Image as ImageIcon,
    Building2,
    Settings,
    Search,
    GraduationCap,
    Laptop,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { GlobalSearch } from '@/components/ui/GlobalSearch';

const navigation = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Finance', href: '/finance', icon: TrendingUp },
    { name: 'Presentations', href: '/presentations', icon: FileText },
    { name: 'Operations', href: '/operations', icon: Package },
    { name: 'Strategic', href: '/strategic', icon: Target },
    { name: 'Research', href: '/research', icon: Database },
    { name: 'Meetings', href: '/meetings', icon: Users },
    { name: 'Brand', href: '/brand', icon: ImageIcon },
    { name: 'Courses', href: '/courses', icon: GraduationCap },
    { name: 'Platform', href: '/platform', icon: Laptop },
    { name: 'Company', href: '/company', icon: Building2 },
];

export function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Toggle Search with Cmd+K
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsSearchOpen(true);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <header className="glass-effect sticky top-0 z-40 border-b border-white/5">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 group">
                            <img
                                src="/logo/himkok-logo-white.png"
                                alt="Himkok Logo"
                                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden 2xl:ml-6 2xl:flex 2xl:space-x-4">
                            {navigation.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={cn(
                                            'inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-all duration-200',
                                            isActive
                                                ? 'border-primary text-primary drop-shadow-[0_0_8px_rgba(212,165,116,0.3)]'
                                                : 'border-transparent text-text-secondary hover:text-text-primary hover:border-white/20'
                                        )}
                                    >
                                        <item.icon className={cn("mr-2 h-4 w-4", isActive && "text-primary")} />
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Right Side Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="p-2 text-text-secondary hover:text-primary transition-colors rounded-full hover:bg-surface-elevated"
                            aria-label="Search"
                        >
                            <Search className="h-5 w-5" />
                        </button>
                        <div className="h-6 w-px bg-border mx-2" />
                        <div className="flex items-center space-x-2">
                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                                GB
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex 2xl:hidden">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="p-2 mr-2 text-text-secondary hover:text-primary"
                        >
                            <Search className="h-5 w-5" />
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-surface-elevated focus:outline-none"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="2xl:hidden bg-surface border-b border-border">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        'block px-3 py-2 rounded-md text-base font-medium flex items-center',
                                        isActive
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-text-secondary hover:bg-surface-elevated hover:text-text-primary'
                                    )}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <item.icon className="mr-3 h-5 w-5" />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Global Search Modal */}
            <GlobalSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </header>
    );
}
