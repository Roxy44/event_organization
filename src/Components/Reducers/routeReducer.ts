import { RoutesTypes } from '../types';
import { CommentIcon, TeamIcon, FlagIcon, DribbbleIcon, SearchIcon, PlusSquareIcon } from '../icons';

// перенести куда-то эти данные
const routesData: RoutesTypes = [
    {
        key: 1, 
        name: 'Volleyball',
        path: '/SportsOrganization/News',
        icon: DribbbleIcon(),
        children: [
            {
                key: 1.1,
                name: 'News',
                path: '/SportsOrganization/News',
                icon: CommentIcon(),
            },                        
            {
                key: 1.2,
                name: 'Tournaments',
                path: '/SportsOrganization/Tournaments',
                icon: FlagIcon(),
            }, 
            {
                key: 1.3,
                name: 'Teams',
                path: '/SportsOrganization/Teams',
                icon: TeamIcon(),
            },
            {
                key: 1.4,
                name: 'Organization',
                path: '/SportsOrganization/Organization',
                icon: PlusSquareIcon(),
            }
        ]
    }, 
    {
        key: 2,
        name: 'Tennis',
        path: '/SportsOrganization/News',
        icon: SearchIcon(),
        children: [
            {
                key: 2.1,
                name: 'News',
                path: '/SportsOrganization/News',
                icon: CommentIcon(),
            }, 
            {
                key: 2.2,
                name: 'Tournaments',
                path: '/SportsOrganization/Tournaments',
                icon: FlagIcon(),
            }, 
            {
                key: 2.3,
                name: 'Teams',
                path: '/SportsOrganization/Teams',
                icon: TeamIcon(),
            },
            {
                key: 2.4,
                name: 'Organization',
                path: '/SportsOrganization/Organization',
                icon: PlusSquareIcon(),
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