import { RoutesTypes } from '../types';
import { CommentIcon, FlagIcon, ReadOutlinedIcon, PlusSquareIcon, TrophyIcon } from '../icons';

const userRole = ['admin', 'organizator', 'competitor', 'user' ];
const organizatorRole = ['admin', 'organizator'];

// перенести куда-то эти данные
const routesData: RoutesTypes = [
    {
        key: 1,
        name: 'Новости',
        path: '/event_organization/news',
        icon: CommentIcon(),
        available: userRole,
    }, 
    {
        key: 2,
        name: 'Университеты',
        path: '/event_organization/universities',
        icon: ReadOutlinedIcon(),
        available: organizatorRole,
    },  
    {
        key: 3,
        name: 'Организация',
        path: '/event_organization/organization',
        icon: PlusSquareIcon(),
        available: organizatorRole,
    },                      
    {
        key: 4,
        name: 'Турниры',
        path: '/event_organization/tournaments',
        icon: FlagIcon(),
        available: userRole,
    },
    {
        key: 5,
        name: 'Результаты',
        path: '/event_organization/results',
        icon: TrophyIcon(),
        available: userRole,
    },
];

const defaultState = {
    routesData,
};

export const routeReducer = (state = defaultState, action: any) => {
    switch(action.type) {
    default:
        return state;
    }
};