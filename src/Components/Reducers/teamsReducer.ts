const defaultState = {
    teams: []
};

export const teamsReducer = (state = defaultState, action: any) => {
    switch(action.type) {
    case 'SET_TEAMS_DATA':
        return { ...state, teams: action.payload };
    default:
        return state;
    }
};