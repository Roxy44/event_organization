const defaultState = {
    usersAccauntData: [
        {
            login: 'Administrator',
            password: 'admin',
            role: 'admin'
        },
        {
            login: 'Organizator',
            password: 'organizator',
            role: 'organizator',
        },
        {
            login: 'Competitor',
            password: 'competitor',
            role: 'competitor',
        },
        {
            login: 'User',
            password: 'user',
            role: 'user'
        }
    ],
    userRole: 'admin',
    authorized: false,
};

export const authorizationReducer = (state = defaultState, action: any) => {
    switch(action.type) {
    case 'SET_USER_ROLE': 
        return { ...state, userRole: action.payload };
    case 'SET_AUTHORIZATION_STATUS': 
        return { ...state, authorized: action.payload };
    default:
        return state;
    }
};