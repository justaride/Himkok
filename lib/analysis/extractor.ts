/**
 * Heuristic Data Extractor
 * Extracts structured metrics from unstructured text using regex patterns.
 */

export interface ExtractedMetric {
    metric: string;
    value: string;
    unit: string | null;
    year: number | null;
    context: string;
}

export function extractMetrics(text: string): ExtractedMetric[] {
    const metrics: ExtractedMetric[] = [];
    const lines = text.split('\n');

    // Patterns
    const currencyPattern = /(?:NOK|USD|EUR|£)\s?([\d,.]+\s?(?:million|billion|M|k)?)/i;
    const percentPattern = /([\d,.]+)%/;
    const yearPattern = /\b(20\d{2})\b/;

    // Keywords to associate with values
    const keywords = [
        'Revenue', 'EBITDA', 'Profit', 'Margin', 'Cost', 'Budget',
        'Growth', 'CAGR', 'Market Share', 'Volume', 'Capacity',
        'Sales', 'Turnover', 'Valuation', 'Investment'
    ];

    for (const line of lines) {
        if (!line.trim()) continue;

        // Check for keywords
        const foundKeyword = keywords.find(k => line.toLowerCase().includes(k.toLowerCase()));
        if (!foundKeyword) continue;

        let value = '';
        let unit = null;
        let year = null;

        // Extract Year
        const yearMatch = line.match(yearPattern);
        if (yearMatch) {
            year = parseInt(yearMatch[1]);
        }

        // Extract Currency Value
        const currencyMatch = line.match(currencyPattern);
        if (currencyMatch) {
            value = currencyMatch[1];
            unit = line.match(/NOK|USD|EUR|£/i)?.[0] || 'NOK'; // Default to found currency
        }
        // Extract Percentage
        else {
            const percentMatch = line.match(percentPattern);
            if (percentMatch) {
                value = percentMatch[1];
                unit = '%';
            }
        }

        if (value) {
            metrics.push({
                metric: foundKeyword,
                value: value.trim(),
                unit: unit ? unit.toUpperCase() : null,
                year: year,
                context: line.trim().substring(0, 100) // Store context for verification
            });
        }
    }

    return metrics;
}
