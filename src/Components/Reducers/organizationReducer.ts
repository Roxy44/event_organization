const defaultState = {
    scoreData: []
};

export const organisationReducer = (state = defaultState, action: any) => {
    switch(action.type) {
    case 'SET_SCORE_DATA': 
        return { ...state, scoreData: action.payload };  
    default:
        return state;
    }
};