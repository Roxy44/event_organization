import { RoutesTypes } from '../types';
import { CommentIcon, TeamIcon, FlagIcon, DribbbleIcon, SearchIcon }from '../icons';

const routesData: RoutesTypes = [
    {
        key: 1, 
        name: 'Volleyball',
        path: '/Volleyball',
        icon: DribbbleIcon(),
        children: [
            {
                key: 1.1,
                name: 'News',
                path: '/News',
                icon: CommentIcon(),
            },                        
            {
                key: 1.2,
                name: 'Tournaments',
                path: '/Tournaments',
                icon: FlagIcon(),
            }, 
            {
                key: 1.3,
                name: 'Teams',
                path: '/Teams',
                icon: TeamIcon(),
            }
        ]
    }, 
    {
        key: 2,
        name: 'Tennis',
        path: '/Tennis',
        icon: SearchIcon(),
        children: [
            {
                key: 2.1,
                name: 'News',
                path: '/News',
                icon: CommentIcon(),
            }, 
            {
                key: 2.2,
                name: 'Tournaments',
                path: '/Tournaments',
                icon: FlagIcon(),
            }, 
            {
                key: 2.3,
                name: 'Teams',
                path: '/Teams',
                icon: TeamIcon(),
            }
        ]
    },
]

const defaultState = {
	routesData,
    activeTab: null,
}

export const routeReducer = (state = defaultState, action: any) => {
	switch(action.type) {
		case 'SET_ACTIVETAB':
			return { ...state, activeTab: action.payload };
		default:
			return state;
	}
}