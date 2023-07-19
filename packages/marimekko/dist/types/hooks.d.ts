import { Stack, Series } from 'd3-shape';
import { InheritedColorConfig } from '@nivo/colors';
import { ScaleLinear } from '@nivo/scales';
import { NormalizedDatum, ComputedDatum, DataProps, DatumPropertyAccessor, Layout, DimensionDatum, CommonProps, CustomLayerProps, BarDatum, OffsetId } from './types';
export declare const useDataDimensions: <RawDatum>(rawDimensions: {
    id: string;
    value: string | number | DatumPropertyAccessor<RawDatum, number>;
}[]) => {
    dimensionIds: string[];
    dimensions: Record<string, (datum: RawDatum) => number>;
};
export declare const useStack: <RawDatum>(dimensionIds: string[], dimensions: Record<string, (datum: RawDatum) => number>, offset: OffsetId) => Stack<any, RawDatum, string>;
export declare const useStackedData: <RawDatum>(stack: Stack<any, RawDatum, string>, data: RawDatum[]) => {
    stacked: Series<RawDatum, string>[];
    min: number;
    max: number;
};
export declare const useDimensionsScale: (min: number, max: number, width: number, height: number, layout: Layout) => ScaleLinear<number>;
export declare const useNormalizedData: <RawDatum>(data: RawDatum[], id: string | number | DatumPropertyAccessor<RawDatum, import("./types").DatumId>, value: string | number | DatumPropertyAccessor<RawDatum, number>) => NormalizedDatum<RawDatum>[];
export declare const useThicknessScale: <RawDatum>({ data, width, height, layout, outerPadding, innerPadding, }: {
    data: NormalizedDatum<RawDatum>[];
    width: number;
    height: number;
    layout: Layout;
    outerPadding: number;
    innerPadding: number;
}) => ScaleLinear<number>;
export declare const useComputedData: <RawDatum>({ data, stacked, dimensionIds, valueFormat, thicknessScale, dimensionsScale, colors, layout, outerPadding, innerPadding, }: {
    data: NormalizedDatum<RawDatum>[];
    stacked: Series<RawDatum, string>[];
    dimensionIds: string[];
    valueFormat: import("@nivo/core").ValueFormat<number, void> | undefined;
    thicknessScale: ScaleLinear<number>;
    dimensionsScale: ScaleLinear<number>;
    colors: import("@nivo/colors").OrdinalColorScaleConfig<Omit<DimensionDatum<RawDatum>, "color" | "fill">>;
    layout: Layout;
    outerPadding: number;
    innerPadding: number;
}) => ComputedDatum<RawDatum>[];
export declare const useBars: <RawDatum>(data: ComputedDatum<RawDatum>[], borderColor: InheritedColorConfig<DimensionDatum<RawDatum>>, borderWidth: number) => BarDatum<RawDatum>[];
export declare const useMarimekko: <RawDatum>({ data, id, value, valueFormat, dimensions: rawDimensions, layout, offset, outerPadding, innerPadding, colors, borderColor, borderWidth, width, height, }: {
    data: RawDatum[];
    id: string | number | DatumPropertyAccessor<RawDatum, import("./types").DatumId>;
    value: string | number | DatumPropertyAccessor<RawDatum, number>;
    valueFormat: import("@nivo/core").ValueFormat<number, void> | undefined;
    dimensions: {
        id: string;
        value: string | number | DatumPropertyAccessor<RawDatum, number>;
    }[];
    layout: Layout;
    offset: OffsetId;
    outerPadding: number;
    innerPadding: number;
    colors: import("@nivo/colors").OrdinalColorScaleConfig<Omit<DimensionDatum<RawDatum>, "color" | "fill">>;
    borderColor: InheritedColorConfig<DimensionDatum<RawDatum>>;
    borderWidth: number;
    width: number;
    height: number;
}) => {
    computedData: ComputedDatum<RawDatum>[];
    bars: BarDatum<RawDatum>[];
    thicknessScale: ScaleLinear<number>;
    dimensionsScale: ScaleLinear<number>;
    dimensionIds: string[];
};
export declare const useLayerContext: <RawDatum>({ data, bars, thicknessScale, dimensionsScale, }: {
    data: ComputedDatum<RawDatum>[];
    bars: BarDatum<RawDatum>[];
    thicknessScale: ScaleLinear<number>;
    dimensionsScale: ScaleLinear<number>;
}) => CustomLayerProps<RawDatum>;
export declare const useLegendData: <RawDatum>(dimensionIds: string[], bars: BarDatum<RawDatum>[]) => {
    id: string;
    label: string;
    color: string;
    fill?: string | undefined;
}[];
//# sourceMappingURL=hooks.d.ts.map