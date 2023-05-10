import { store } from '../Store/store';

export type RoutesTypes = {
    key: number;
    name: string;
    path: string;
    icon: JSX.Element;
    available: string[];
}[];

export interface DataType {
    key: string;
    columnOne: Object;
    columnTwo: Object;
    columnThree: Object;
    columnFour: Object;
}

export interface UniversitiesDataType {
    key: number;
    name: string;
    main: string;
    email: string;
}

export interface TournamentsDataType {
    name: string;
    main: string;
    period: string;
}

export interface TournamentDataType {
    id: number;
    name: string;
    status: string;
}

export interface TournamentTableDataType {
    name: string;
}

export interface TournamentMatchesDataType {
    date: string;
    teams: string;
    result: string;
}

export interface ResultsDataType {
    date: string;
    teams: string;
    result: string;
}


export type RootState = ReturnType<typeof store.getState>;