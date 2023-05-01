import { RoutesTypes } from '../types';
import { CommentIcon, FlagIcon, DribbbleIcon, SearchIcon, PlusSquareIcon, TrophyIcon } from '../icons';

const userRole = ['admin', 'organizator', 'competitor', 'user' ];
const organizatorRole = ['admin', 'organizator'];

// перенести куда-то эти данные
const routesData: RoutesTypes = [
    {
        key: 1, 
        name: 'Волейбол',
        path: '/SportsOrganization/News',
        icon: DribbbleIcon(),
        children: [
            {
                key: 1.1,
                name: 'Новости',
                path: '/SportsOrganization/News',
                icon: CommentIcon(),
                available: userRole,
            },                        
            {
                key: 1.2,
                name: 'Турниры',
                path: '/SportsOrganization/Tournaments',
                icon: FlagIcon(),
                available: userRole,
            },
            {
                key: 1.3,
                name: 'Результаты',
                path: '/SportsOrganization/Results',
                icon: TrophyIcon(),
                available: userRole,
            },
            {
                key: 1.4,
                name: 'Организация',
                path: '/SportsOrganization/Organization',
                icon: PlusSquareIcon(),
                available: organizatorRole,
            }
        ]
    }, 
    {
        key: 2,
        name: 'Теннис',
        path: '/SportsOrganization/News',
        icon: SearchIcon(),
        children: [
            {
                key: 2.1,
                name: 'Новости',
                path: '/SportsOrganization/News',
                icon: CommentIcon(),
                available: userRole,
            },                        
            {
                key: 2.2,
                name: 'Турниры',
                path: '/SportsOrganization/Tournaments',
                icon: FlagIcon(),
                available: userRole,
            },
            {
                key: 2.3,
                name: 'Результаты',
                path: '/SportsOrganization/Results',
                icon: TrophyIcon(),
                available: userRole,
            },
            {
                key: 2.4,
                name: 'Организация',
                path: '/SportsOrganization/Organization',
                icon: PlusSquareIcon(),
                available: organizatorRole,
            }
        ]
    },
];

const defaultState = {
    routesData,
    activeTab: null,
};

export const routeReducer = (state = defaultState, action: any) => {
    switch(action.type) {
    case 'SET_ACTIVETAB':
        return { ...state, activeTab: action.payload };
    default:
        return state;
    }
};