import { BoxPlotDatum, BoxPlotCommonProps, BoxPlotSummary } from '../types';
/** stratify an array of raw data objects into an array of arrays;
 * each array will create one box plot */
export declare const stratifyData: <RawDatum extends BoxPlotDatum>({ data, groups, getGroup, subGroups, getSubGroup, }: {
    data: RawDatum[];
    groups?: string[] | null | undefined;
    getGroup: ((datum: RawDatum) => string) | null;
    subGroups?: string[] | null | undefined;
    getSubGroup: ((datum: RawDatum) => string) | null;
}) => RawDatum[][];
export declare const summarizeDistribution: <RawDatum extends BoxPlotDatum>({ data, getValue, groups, subGroups, groupIndex, subGroupIndex, quantiles, }: {
    data: RawDatum[];
    getValue: (datum: RawDatum) => unknown;
    groups: string[] | null;
    subGroups: string[] | null;
    groupIndex: number;
    subGroupIndex: number;
    quantiles: number[];
}) => BoxPlotSummary;
//# sourceMappingURL=stratification.d.ts.map