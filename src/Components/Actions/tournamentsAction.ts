import { db } from '../../Config/firebase';
import { getDocs, collection, updateDoc, doc } from 'firebase/firestore';

import moment from 'moment';
const tournamentsCollectionRef = collection(db, 'tournaments');

export const getTournamentsDataAction = async () => {
    const data = await getDocs(tournamentsCollectionRef);
    const filteredData = data.docs.map((doc) => ({
        id: doc.id,
        sportType: doc.data().sportType,
        tournamentName: doc.data().tournamentName,
        description: doc.data().description,
        results: doc.data().results,
    }));

    return {
        type: 'SET_TOURNAMENTS_DATA', 
        payload: filteredData,
    };
};

export const changeTournamentsData = async (data: any, values: any) => {
    const newItem: any = { 
        name: `${values.tournamentName} ${values.sportType ? '(М)' : '(Ж)'}`,
        format: values.format,
        period: `${moment(values.period[0]).format('MMM YYYY')} - ${moment(values.period[1]).format('MMM YYYY')}`,
        main: values.main,
        competitors: values.competitors.map((item: string) => ({
            name: item,
            status: 'Ожидание...',
        })),
        prize_pool: values.prize_pool,
        tournament_place: '',
        matchesData: [
            {
                date: '',
                teams: '',
                result: ''
            },
        ]
    };

    newItem['results'] = values.competitors.map((item: string) => (
        {
            name: item,
            scores: [],
        }
    ));
    
    return {
        type: 'SET_TOURNAMENTS_DATA', 
        payload: [...data, newItem],
    };
};

export const changeTournamenPlace = async (oldData: any, tournamentData: any, place: string) => {
    const newData = {...tournamentData, tournament_place: place};

    return {
        type: 'SET_TOURNAMENTS_DATA', 
        payload: [...oldData, newData],
    };
};

export const addTournamenMatch = async (oldData: any, tournamentData: any, values: any) => {
    const newData = {...tournamentData, matchesData: [...tournamentData.matchesData, { date: moment(values.date).format('DD.MM.YYYY'), teams: `${values.team1} - ${values.team2}`, result: values.result }]};

    return {
        type: 'SET_TOURNAMENTS_DATA', 
        payload: [...oldData, newData],
    };
};

export const changeTournamentName = async (newTournamentName: string | undefined, oldTournamentName: string | undefined) => {
    const data = await getDocs(tournamentsCollectionRef);
    const filteredData = data.docs.map((doc) => ({
        id: doc.id,
        tournamentName: doc.data().tournamentName,
    }));
    const docId = filteredData.filter((item: { tournamentName: string }) => item.tournamentName === oldTournamentName);
    if (docId.length !== 0) {
        const tournamentsDocsRef = doc(db,'tournaments', docId[0].id);

        updateDoc(tournamentsDocsRef, {
            tournamentName: newTournamentName
        });
    }
    
    return getTournamentsDataAction();
};
