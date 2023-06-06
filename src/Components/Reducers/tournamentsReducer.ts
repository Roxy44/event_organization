const defaultState = {
    tournamentsData: [
        {
            name: 'Волейбол (М)',
            format: 'Студенты',
            period: 'янв. 2023 - февр. 2023',
            main: 'ТУСУР',
            competitors: [
                { 
                    name: 'ТУСУР',
                    status: 'Подтвержден',
                },
                { 
                    name: 'ТПУ',
                    status: 'Подтвержден',
                },
                { 
                    name: 'ТГУ',
                    status: 'Подтвержден',
                }
            ],
            results: [
                {
                    name: 'ТУСУР',
                    scores: [
                        { 
                            competitor: 'ТУСУР',
                            result: '',
                            winScore: 0,
                            loseScore: 0,
                        },
                        { 
                            competitor: 'ТПУ',
                            result: 'win',
                            winScore: 3,
                            loseScore: 2,
                        },
                        { 
                            competitor: 'ТГУ',
                            result: 'win',
                            winScore: 4,
                            loseScore: 1,
                        },
                    ],
                },
                {
                    name: 'ТПУ',
                    scores: [
                        { 
                            competitor: 'ТУСУР',
                            result: 'lose',
                            winScore: 2,
                            loseScore: 3,
                        },
                        { 
                            competitor: 'ТПУ',
                            result: '',
                            winScore: 0,
                            loseScore: 0,
                        },
                        { 
                            competitor: 'ТГУ',
                            result: 'win',
                            winScore: 3,
                            loseScore: 2,
                        },
                    ],
                },
                {
                    name: 'ТГУ',
                    scores: [
                        { 
                            competitor: 'ТУСУР',
                            result: 'lose',
                            winScore: 1,
                            loseScore: 4,
                        },
                        { 
                            competitor: 'ТПУ',
                            result: 'lose',
                            winScore: 2,
                            loseScore: 3,
                        },
                        { 
                            competitor: 'ТГУ',
                            result: '',
                            winScore: 0,
                            loseScore: 0,
                        },
                    ],
                },
            ],
            prize_pool: 12000,
            tournament_place: 'ТУСУР',
            matchesData: [
                {
                    date: '20.04.2023',
                    teams: 'ТУСУР - ТПУ',
                    result: '3:2'
                },
                {
                    date: '20.04.2023',
                    teams: 'ТУСУР - ТГУ',
                    result: '4:1'
                },
                {
                    date: '21.04.2023',
                    teams: 'ТГУ - ТПУ',
                    result: '2:3'
                }
            ]
        }
    ],
};

export const tournamentsReducer = (state = defaultState, action: any) => {
    switch(action.type) {
    case 'SET_TOURNAMENTS_DATA':
        return { ...state, tournamentsData: action.payload };
    default:
        return state;
    }
};