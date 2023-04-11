import { db } from '../../Config/firebase';
import { getDocs, collection } from 'firebase/firestore';

const teamsCollectionRef = collection(db, 'teams');

export const getTeamsDataAction = async () => {
    const data = await getDocs(teamsCollectionRef);
    const filteredData = data.docs.map((doc) => ({
        id: doc.id,
        teamName: doc.data().teamName,
        description: doc.data().description,
        players: doc.data().teamPlayers,
    }));

    return {
        type: 'SET_TEAMS_DATA', 
        payload: filteredData
    };
};