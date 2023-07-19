type Link = {
    source: string;
    target: string;
    value: number;
};
export declare const generateSankeyData: ({ nodeCount, maxIterations, }?: {
    nodeCount?: number | undefined;
    maxIterations?: number | undefined;
}) => {
    nodes: ({
        id: string;
    } & {
        nodeColor: string;
    })[];
    links: Link[];
};
export {};
//# sourceMappingURL=sankey.d.ts.map