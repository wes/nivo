/// <reference types="react" />
import { InheritedColorConfig } from '@nivo/colors';
import { ComputedBar, RadialBarLayerId } from './types';
export declare const commonDefaultProps: {
    maxValue: "auto";
    layers: RadialBarLayerId[];
    startAngle: number;
    endAngle: number;
    innerRadius: number;
    padding: number;
    padAngle: number;
    cornerRadius: number;
    enableTracks: boolean;
    tracksColor: string;
    enableRadialGrid: boolean;
    enableCircularGrid: boolean;
    radialAxisStart: {};
    radialAxisEnd: null;
    circularAxisInner: null;
    circularAxisOuter: {};
    colors: {
        scheme: "nivo";
    };
    borderWidth: number;
    borderColor: InheritedColorConfig<ComputedBar<import("./types").RadialBarDatum>>;
    enableLabels: boolean;
    label: string;
    labelsSkipAngle: number;
    labelsRadiusOffset: number;
    labelsTextColor: {
        theme: string;
    };
    isInteractive: boolean;
    tooltip: <D extends import("./types").RadialBarDatum>({ bar }: import("./types").RadialBarTooltipProps<D>) => JSX.Element;
    legends: never[];
    defs: never[];
    fill: never[];
    animate: boolean;
    motionConfig: "gentle";
    transitionMode: "centerRadius";
    renderWrapper: boolean;
};
export declare const svgDefaultProps: {
    maxValue: "auto";
    layers: RadialBarLayerId[];
    startAngle: number;
    endAngle: number;
    innerRadius: number;
    padding: number;
    padAngle: number;
    cornerRadius: number;
    enableTracks: boolean;
    tracksColor: string;
    enableRadialGrid: boolean;
    enableCircularGrid: boolean;
    radialAxisStart: {};
    radialAxisEnd: null;
    circularAxisInner: null;
    circularAxisOuter: {};
    colors: {
        scheme: "nivo";
    };
    borderWidth: number;
    borderColor: InheritedColorConfig<ComputedBar<import("./types").RadialBarDatum>>;
    enableLabels: boolean;
    label: string;
    labelsSkipAngle: number;
    labelsRadiusOffset: number;
    labelsTextColor: {
        theme: string;
    };
    isInteractive: boolean;
    tooltip: <D extends import("./types").RadialBarDatum>({ bar }: import("./types").RadialBarTooltipProps<D>) => JSX.Element;
    legends: never[];
    defs: never[];
    fill: never[];
    animate: boolean;
    motionConfig: "gentle";
    transitionMode: "centerRadius";
    renderWrapper: boolean;
};
//# sourceMappingURL=props.d.ts.map