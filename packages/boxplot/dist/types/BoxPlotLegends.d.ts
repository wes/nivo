/// <reference types="react" />
import { LegendProps } from '@nivo/legends';
import { LegendData } from './types';
interface BoxPlotLegendsProps {
    width: number;
    height: number;
    legends: [LegendProps, LegendData[]][];
}
export declare const BoxPlotLegends: ({ width, height, legends }: BoxPlotLegendsProps) => JSX.Element;
export {};
//# sourceMappingURL=BoxPlotLegends.d.ts.map