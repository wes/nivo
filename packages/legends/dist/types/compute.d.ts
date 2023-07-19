import { BoxLegendSvgProps, ContinuousColorsLegendProps, LegendAnchor, LegendItemDirection } from './types';
export declare const computeDimensions: ({ direction, itemsSpacing, padding: _padding, itemCount, itemWidth, itemHeight, }: Pick<BoxLegendSvgProps, 'direction' | 'padding'> & Record<'itemsSpacing' | 'itemCount' | 'itemWidth' | 'itemHeight', number>) => {
    width: number;
    height: number;
    padding: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
};
export declare const computePositionFromAnchor: ({ anchor, translateX, translateY, containerWidth, containerHeight, width, height, }: {
    anchor: LegendAnchor;
} & Record<"translateX" | "translateY" | "containerWidth" | "containerHeight" | "width" | "height", number>) => {
    x: number;
    y: number;
};
export declare const computeItemLayout: ({ direction, justify, symbolSize, symbolSpacing, width, height, }: {
    direction: LegendItemDirection;
    justify: boolean;
} & Record<"symbolSize" | "symbolSpacing" | "width" | "height", number>) => {
    symbolX: number;
    symbolY: number;
    labelX: number;
    labelY: number;
    labelAnchor: "start" | "middle" | "end";
    labelAlignment: "alphabetic" | "central" | "text-before-edge";
};
export declare const computeContinuousColorsLegend: ({ scale, ticks, length, thickness, direction, tickPosition, tickSize, tickSpacing, tickOverlap, tickFormat, title, titleAlign, titleOffset, }: ContinuousColorsLegendProps) => {
    width: number;
    height: number;
    gradientX1: number;
    gradientY1: number;
    gradientX2: number;
    gradientY2: number;
    colorStops: {
        key: string;
        offset: number;
        stopColor: string;
    }[];
    ticks: {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        text: string;
        textX: number;
        textY: number;
        textHorizontalAlign: 'start' | 'middle' | 'end';
        textVerticalAlign: 'alphabetic' | 'central' | 'hanging';
    }[];
    titleText: string | undefined;
    titleX: number;
    titleY: number;
    titleRotation: number;
    titleHorizontalAlign: "start" | "middle" | "end";
    titleVerticalAlign: "alphabetic" | "hanging";
};
//# sourceMappingURL=compute.d.ts.map