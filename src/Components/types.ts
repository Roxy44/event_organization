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