import React, { useEffect, useState } from 'react';

import { Button } from 'antd';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../Store/store';

import { db } from '../../../Config/firebase';
import { getDocs, collection, doc, updateDoc } from 'firebase/firestore';

import './Organization.css';

const Organisation = () => {
    const [docId, setDocId] = useState('');
    const [commandScores, setScores] = useState({firstCommand: Number, secondCommand: Number});
    
    const dispatch = useDispatch();

    const matchesCollectionRef = collection(db, 'tournamentsMatches');

    useEffect(() => {
        getData();
    }, []);
    
    const getData = async () => {
        const data = await getDocs(matchesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
            id: doc.id,
            type: doc.data().type,
            name: doc.data().name,
            firstCommand: doc.data().firstCommand,
            secondCommand: doc.data().secondCommand,
        }));
        setDocId(filteredData[0].id);
        setScores({firstCommand: filteredData[0].firstCommand, secondCommand: filteredData[0].secondCommand});
        dispatch({type: 'SET_SCORE', payload: {firstCommand: filteredData[0].firstCommand, secondCommand: filteredData[0].secondCommand}}); 
    };
    
    const changeScore = (data: {action: number, team: string}) => {
        const matchDoc = doc(db, 'tournamentsMatches', docId);
        const teamScore = data.team === 'firstCommand' ? commandScores.firstCommand : commandScores.secondCommand;
        updateDoc(matchDoc, {[data.team]: Number(teamScore) + data.action}); 
        getData();
    };

    const score = useSelector((state: RootState) => state.organization.score);

    return (
        <div className='Results'>
            <div className='FirstTeamScore'>
                <div className='ScorePanel'>
                    <span >{score.firstCommand}</span>
                </div>
                <div className='ScoreButtons'>
                    <Button onClick={() => changeScore({action: -1, team: 'firstCommand'})}>Sub</Button>
                    <Button onClick={() => changeScore({action: 1, team: 'firstCommand'})}>Add</Button>
                </div>
            </div>
            <div className='SecondTeamScore'>
                <div className='ScorePanel'>
                    <span >{score.secondCommand}</span>
                </div>
                <div className='ScoreButtons'>
                    <Button onClick={() => changeScore({action: -1, team: 'secondCommand'})}>Sub</Button>
                    <Button onClick={() => changeScore({action: 1, team: 'secondCommand'})}>Add</Button>
                </div>
            </div>
        </div> 
    );
};

export default Organisation;