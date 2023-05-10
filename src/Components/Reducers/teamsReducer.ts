const defaultState = {
    teamsData: [
        {
            name: 'ТУСУР',
            players: []
        },
        {
            name: 'ТПУ',
            players: []
        },
        {
            name: 'ТГУ',
            players: []
        }
    ]
};

export const teamsReducer = (state = defaultState, action: any) => {
    switch(action.type) {
    case 'SET_TEAMS_DATA':
        return { ...state, teamsData: action.payload };
    default:
        return state;
    }
};