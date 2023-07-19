/// <reference types="react" />
import { ComputedNode, TreeMapCommonProps, NodeComponent } from './types';
interface TreeMapNodesProps<Datum extends object> {
    nodes: ComputedNode<Datum>[];
    nodeComponent: NodeComponent<Datum>;
    borderWidth: TreeMapCommonProps<Datum>['borderWidth'];
    enableLabel: TreeMapCommonProps<Datum>['enableLabel'];
    labelSkipSize: TreeMapCommonProps<Datum>['labelSkipSize'];
    enableParentLabel: TreeMapCommonProps<Datum>['enableParentLabel'];
    isInteractive: TreeMapCommonProps<Datum>['isInteractive'];
    onMouseEnter?: TreeMapCommonProps<Datum>['onMouseEnter'];
    onMouseMove?: TreeMapCommonProps<Datum>['onMouseMove'];
    onMouseLeave?: TreeMapCommonProps<Datum>['onMouseLeave'];
    onClick?: TreeMapCommonProps<Datum>['onClick'];
    tooltip: TreeMapCommonProps<Datum>['tooltip'];
}
export declare const TreeMapNodes: <Datum extends object>({ nodes, nodeComponent, borderWidth, enableLabel, labelSkipSize, enableParentLabel, isInteractive, onMouseEnter, onMouseMove, onMouseLeave, onClick, tooltip, }: TreeMapNodesProps<Datum>) => JSX.Element;
export {};
//# sourceMappingURL=TreeMapNodes.d.ts.map