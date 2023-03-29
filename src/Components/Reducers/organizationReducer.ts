const defaultState = {
    score: {
        firstCommand: 0,
        secondCommand: 0,
    }
};

export const organisationReducer = (state = defaultState, action: any) => {
    switch(action.type) {
    case 'SET_SCORE':
        return { ...state, score: action.payload };
    default:
        return state;
    }
};