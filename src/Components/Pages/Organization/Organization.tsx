import React, { useEffect } from 'react';

import { Button } from 'antd';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../Store/store';

import { getScoreDataAction, changeScoreDataAction } from '../../Actions/organizationActions';

import './Organization.css';

const Organisation = () => {
    const matchData = useSelector((state: RootState) => state.organization.scoreData);
    const dispatch = useDispatch();

    useEffect(() => {
        getScore();
    }, []);
    
    const getScore = async() => {
        dispatch(await getScoreDataAction());
    };
    
    const changeScore = async (data: {action: number, team: string}) => {
        dispatch(await changeScoreDataAction(data.team, data.action, matchData));
    };

    return (
        <div className='Results'>
            <div className='FirstTeamScore'>
                <div className='ScorePanel'>
                    <span >{matchData.firstCommand}</span>
                </div>
                <div className='ScoreButtons'>
                    <Button onClick={() => changeScore({action: -1, team: 'firstCommand'})}>Sub</Button>
                    <Button onClick={() => changeScore({action: 1, team: 'firstCommand'})}>Add</Button>
                </div>
            </div>
            <div className='SecondTeamScore'>
                <div className='ScorePanel'>
                    <span >{matchData.secondCommand}</span>
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