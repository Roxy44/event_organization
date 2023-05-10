const universities = [
    {
        id: 0,
        name: 'ТУСУР',
        main: 'Дмитрий И.И.',
        number: '8-800-555-35-35',
        email: 'dimaivankov911@gmail.com',
    },
    {
        id: 1,
        name: 'ТПУ',
        main: 'Семен В.А.',
        number: '34-33-32',
        email: 'testemail@mail.ru',
    },
    {
        id: 2,
        name: 'ТГУ',
        main: 'Виктор А.С.',
        number: '12-05-01',
        email: 'farmlesa@mail.ru',
    },
];

const defaultState = {
    universitiesData: universities,
    minId: 2, 
};

export const universitiesReducer = (state = defaultState, action: any) => {
    switch(action.type) {
    case 'SET_UNIVERSITIES_DATA': 
        return {...state, universitiesData: action.payload};
    case 'SET_MIN_ID': 
        return {...state, minId: action.payload};
        
    default:
        return state;
    }
};