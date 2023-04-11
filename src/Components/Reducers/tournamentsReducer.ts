const defaultState = {
    tournaments: []
};

export const tournamentsReducer = (state = defaultState, action: any) => {
    switch(action.type) {
    case 'SET_TOURNAMENTS_DATA':
        return { ...state, tournaments: action.payload };
    default:
        return state;
    }
};