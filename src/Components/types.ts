export type RoutesTypes = {
	key: number;
    name: string;
    path: string;
    icon: JSX.Element;
    children: {
        key: number;
        name: string;
        path: string;
        icon: JSX.Element;
    }[];
}[]

export interface DataType {
    key: string;
    columnOne: Object;
    columnTwo: Object;
    columnThree: Object;
    columnFour: Object;
}

export interface TableDataType {
    key: string;
    name: string;
    statistic1: Number | null;
    statistic2: Number | null;
    statistic3: Number | null;
    statistic4: Number | null;
}