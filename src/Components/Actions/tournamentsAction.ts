import { db } from '../../Config/firebase';
import { getDocs, collection } from 'firebase/firestore';

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
        payload: filteredData
    };
};