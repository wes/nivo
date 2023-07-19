import * as sets from './sets';
export { sets };
export declare const randColor: () => string;
export declare const generateProgrammingLanguageStats: (shouldShuffle?: boolean, limit?: number) => {
    label: string;
    value: number;
    color: string;
}[];
export declare const uniqRand: <T>(generator: (...args: unknown[]) => T) => (...args: unknown[]) => T;
export declare const randCountryCode: () => string;
type DrinkDatum = {
    id: string;
    color: string;
    data: Array<{
        color: string;
        x: string;
        y: number;
    }>;
};
export declare const generateDrinkStats: (xSize?: number) => DrinkDatum[];
export declare const generateSerie: (xSize?: number) => number[];
export declare const generateSeries: (ids: string[], xKeys: string[]) => {
    id: string;
    color: string;
    data: {
        x: string;
        y: number;
    }[];
}[];
export declare const generateStackData: (size?: number) => {
    x: number;
    y: number;
}[][];
export declare const generateCountriesPopulation: (size: number) => {
    country: string;
    population: number;
}[];
export declare const generateOrderedDayCounts: (from: Date, to: Date) => {
    value: number;
    day: string;
}[];
export declare const generateDayCounts: (from: Date, to: Date, maxSize?: number) => {
    value: number;
    day: string;
}[];
export declare const generateCountriesData: (keys: string[], { size, min, max, withColors }?: {
    size?: number | undefined;
    min?: number | undefined;
    max?: number | undefined;
    withColors?: boolean | undefined;
}) => Record<string, unknown>[];
interface LibTreeDatum {
    name: string;
    loc?: number;
    color: string;
    children?: LibTreeDatum[];
}
export declare const generateLibTree: (name?: string, limit?: number | null, children?: (string | (string | (string | (string | string[][])[][])[][])[][])[][]) => LibTreeDatum;
export declare const generateWinesTastes: ({ randMin, randMax }?: {
    randMin?: number | undefined;
    randMax?: number | undefined;
}) => {
    data: Record<string, unknown>[];
    keys: string[];
};
export * from './boxplot';
export * from './bullet';
export * from './chord';
export * from './network';
export * from './parallelCoordinates';
export * from './sankey';
export * from './swarmplot';
export * from './waffle';
export * from './xySeries';
//# sourceMappingURL=index.d.ts.map