import { db } from '../../Config/firebase';
import { getDocs, collection, updateDoc, doc } from 'firebase/firestore';

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