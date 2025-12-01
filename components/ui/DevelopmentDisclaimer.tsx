import { Info } from 'lucide-react';

export function DevelopmentDisclaimer({ className = "" }: { className?: string }) {
    return (
        <div className={`bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 flex items-start gap-3 ${className}`}>
            <Info className="text-blue-500 shrink-0 mt-0.5" size={20} />
            <div>
                <span className="font-semibold text-blue-500 block mb-1">Development Data Only</span>
                <span className="text-sm text-blue-500/80">
                    Disclaimer: These numbers are not confirmed and this is only a start point for developing with confirmed numbers from official financial reports.
                </span>
            </div>
        </div>
    );
}
