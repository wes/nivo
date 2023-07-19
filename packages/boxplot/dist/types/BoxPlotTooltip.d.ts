/// <reference types="react" />
import { BoxPlotSummaryFormatted, BoxPlotTooltipProps, BoxPlotSummary } from './types';
interface BoxPlotSummaryTooltipProps {
    label: string;
    formatted: BoxPlotSummaryFormatted;
    color?: string;
    enableChip?: boolean;
}
export declare const defaultTranslation: {
    n: string;
    mean: string;
    min: string;
    max: string;
    Summary: string;
    Quantiles: string;
};
export declare const BoxPlotSummaryTooltip: import("react").NamedExoticComponent<BoxPlotSummaryTooltipProps>;
export declare const BoxPlotTooltip: ({ color, label, formatted }: BoxPlotTooltipProps) => JSX.Element;
export declare const BoxPlotTooltipLabel: (datum: BoxPlotSummary) => string;
export {};
//# sourceMappingURL=BoxPlotTooltip.d.ts.map