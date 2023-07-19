import { MouseEvent } from 'react';
import { useInheritedColor } from '@nivo/colors';
import { GridFillDirection } from '@nivo/grid';
import { CommonProps, ComputedDatum, Datum, DataProps, EmptyCell, Cell, MouseHandlers, TooltipComponent, LegendDatum, WaffleSvgProps, CustomLayerProps } from './types';
/**
 * Computes empty cells according to dimensions/layout/padding.
 * At this stage the cells aren't bound to any data.
 */
export declare const computeGrid: ({ width, height, rows, columns, fillDirection, emptyColor, emptyOpacity, getBorderColor, }: {
    width: number;
    height: number;
    rows: number;
    columns: number;
    fillDirection: GridFillDirection;
    emptyColor: string;
    emptyOpacity: number;
    getBorderColor: ReturnType<typeof useInheritedColor<{
        color: string;
    }>>;
}) => EmptyCell[];
export declare const mergeCellsData: <RawDatum extends Datum>(cells: EmptyCell[], data: ComputedDatum<RawDatum>[]) => Cell<RawDatum>[];
export declare const useWaffle: <D extends Datum = Datum>({ width, height, data, hiddenIds, valueFormat, total, rows, columns, fillDirection, colors, emptyColor, emptyOpacity, borderColor, forwardLegendData, defs, fill, }: Pick<CommonProps<D>, "hiddenIds" | "valueFormat" | "fillDirection" | "colors" | "emptyColor" | "emptyOpacity" | "borderColor"> & Pick<WaffleSvgProps<D>, "defs" | "fill"> & DataProps<D> & {
    width: number;
    height: number;
    forwardLegendData?: ((data: LegendDatum<D>[]) => void) | undefined;
}) => {
    cells: Cell<D>[];
    computedData: ComputedDatum<D>[];
    legendData: LegendDatum<D>[];
    getBorderColor: import("@nivo/colors").InheritedColorConfigCustomFunction<{
        color: string;
    } | ComputedDatum<D>> | ((d: {
        color: string;
    } | ComputedDatum<D>) => any);
    boundDefs: any;
};
/**
 * This D3 path generator is used to compute the polygons
 * surrounding each group of cells attached to the same datum.
 */
export declare const useAreaPathGenerator: () => import("d3-shape").Line<[number, number]>;
/**
 * Generate event handlers for both the SVG & HTML implementations,
 * for the canvas implementation, we don't need it because the current
 * cell is detected using a global event handler attached to the canvas itself.
 */
export declare const useAreaMouseHandlers: <D extends Datum, E extends Element>(data: ComputedDatum<D>, { onMouseEnter, onMouseMove, onMouseLeave, onClick }: Partial<MouseHandlers<D, E>>, tooltip: TooltipComponent<D>) => {
    handleMouseEnter: (event: MouseEvent<E, globalThis.MouseEvent>) => void;
    handleMouseMove: (event: MouseEvent<E, globalThis.MouseEvent>) => void;
    handleMouseLeave: (event: MouseEvent<E, globalThis.MouseEvent>) => void;
    handleClick: (event: MouseEvent<E, globalThis.MouseEvent>) => void;
};
/**
 * Generate cells transitions for the SVG & HTML implementations.
 */
export declare const useAnimatedCells: <D extends Datum>({ cells, padding, motionStagger, }: {
    cells: Cell<D>[];
    padding: number;
    motionStagger: number;
}) => import("@react-spring/core").TransitionFn<Cell<D>, {
    borderColor: string;
    color: string;
    opacity: number;
    x: number;
    y: number;
    size: number;
}>;
/**
 * Memoize custom layers props.
 */
export declare const useCustomLayerProps: <D extends Datum>({ cells, computedData, }: CustomLayerProps<D>) => CustomLayerProps<D>;
//# sourceMappingURL=hooks.d.ts.map