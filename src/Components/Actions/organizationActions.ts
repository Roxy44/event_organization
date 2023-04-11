import { db } from '../../Config/firebase';
import { getDocs, collection, doc, updateDoc} from 'firebase/firestore';

const matchesCollectionRef = collection(db, 'tournamentsMatches');

export const getScoreDataAction = async () => {
    const data = await getDocs(matchesCollectionRef);
    const filteredData = data.docs.map((doc) => ({
        id: doc.id,
        type: doc.data().sportType,
        tournamentName: doc.data().tournamentName,
        name: doc.data().matchName,
        firstCommand: doc.data().firstCommand,
        secondCommand: doc.data().secondCommand,
    }));
    return {
        type: 'SET_SCORE_DATA', 
        payload: filteredData[0]
    };
};


export const changeScoreDataAction = (team: string, action: number, data: {firstCommand: string, secondCommand: string, id: string}) => {
    const matchDoc = doc(db, 'tournamentsMatches', data.id);
    const teamScore = team === 'firstCommand' ? data.firstCommand : data.secondCommand;
    updateDoc(matchDoc, {[team]: Number(teamScore) + action});
    
    return getScoreDataAction();
};