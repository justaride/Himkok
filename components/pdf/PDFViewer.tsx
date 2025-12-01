'use client';

import { X, Download, Maximize2, Minimize2 } from 'lucide-react';
import { useState } from 'react';

interface PDFViewerProps {
    fileUrl: string;
    fileName?: string;
    onClose?: () => void;
}

export function PDFViewer({ fileUrl, fileName, onClose }: PDFViewerProps) {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    const downloadPDF = () => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName || 'pitch-deck.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={`${isFullscreen ? 'fixed inset-0 z-50' : 'fixed inset-0 z-50'} bg-dark-950 flex flex-col`}>
            {/* Header */}
            <div className="flex items-center justify-between gap-4 bg-dark-100 border-b border-dark-300 p-4">
                <div className="flex items-center gap-2">
                    {onClose && (
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-dark-200 rounded transition-colors"
                            aria-label="Close"
                        >
                            <X size={20} />
                        </button>
                    )}
                    <span className="text-sm font-medium text-foreground/80">
                        {fileName || 'PDF Document'}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={toggleFullscreen}
                        className="p-2 hover:bg-dark-200 rounded transition-colors"
                        aria-label="Toggle fullscreen"
                    >
                        {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                    </button>
                    <button
                        onClick={downloadPDF}
                        className="p-2 hover:bg-dark-200 rounded transition-colors"
                        aria-label="Download PDF"
                    >
                        <Download size={20} />
                    </button>
                </div>
            </div>

            {/* PDF iframe */}
            <div className="flex-1 overflow-hidden bg-dark-200/30">
                <iframe
                    src={fileUrl}
                    className="w-full h-full border-0"
                    title={fileName || 'PDF Document'}
                />
            </div>
        </div>
    );
}
