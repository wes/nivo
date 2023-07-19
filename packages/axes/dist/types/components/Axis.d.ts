import * as React from 'react';
import { ScaleValue, AnyScale } from '@nivo/scales';
import { AxisProps } from '../types';
export declare const NonMemoizedAxis: <Value extends ScaleValue>({ axis, scale, x, y, length, ticksPosition, tickValues, tickSize, tickPadding, tickRotation, format, renderTick, legend, legendPosition, legendOffset, onClick, ariaHidden, }: AxisProps<Value> & {
    axis: 'x' | 'y';
    scale: AnyScale;
    x?: number | undefined;
    y?: number | undefined;
    length: number;
    onClick?: ((event: React.MouseEvent<SVGGElement, MouseEvent>, value: string | Value) => void) | undefined;
}) => JSX.Element;
export declare const Axis: <Value extends ScaleValue>({ axis, scale, x, y, length, ticksPosition, tickValues, tickSize, tickPadding, tickRotation, format, renderTick, legend, legendPosition, legendOffset, onClick, ariaHidden, }: AxisProps<Value> & {
    axis: 'x' | 'y';
    scale: AnyScale;
    x?: number | undefined;
    y?: number | undefined;
    length: number;
    onClick?: ((event: React.MouseEvent<SVGGElement, MouseEvent>, value: string | Value) => void) | undefined;
}) => JSX.Element;
//# sourceMappingURL=Axis.d.ts.map