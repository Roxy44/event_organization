import React, { useEffect, useState } from 'react';

import { Button, Layout, Spin } from 'antd';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../Store/store';

import { getScoreDataAction, changeScoreDataAction } from '../../Actions/organizationActions';

import './Organization.css';

const { Header, Content } = Layout;

const Organisation = () => {
    const [isLoading, setLoading] = useState(true);

    const matchData = useSelector((state: RootState) => state.organization.scoreData);
    const dispatch = useDispatch();
    
    const firstTeamName = matchData.name?.split(' ')[0];
    const secondTeamName = matchData.name?.split(' ')[2];
    
    useEffect(() => {
        setLoading(true);
        getScore();
    }, []);
    
    const getScore = async() => {
        dispatch(await getScoreDataAction());
        setLoading(false);
    };
    
    const changeScore = async (data: {action: number, team: string}) => {
        dispatch(await changeScoreDataAction(data.team, data.action, matchData));
    };

    return (
        <Layout className='site-layout'>
            <Header className='site-layout-background pageHeader'>
                <span className='headerTitle'>{`Match: ${matchData.name}`}</span>
            </Header>
            {isLoading ?
                <Spin className='Loading' tip='Loading' size='large' />
                :
                (
                    <Content className='site-layout-background organizationContent' style={{padding: 24 }}>
                        <div className='Results'>
                            <div className='matchName'>
                                <span>{firstTeamName}</span>
                                <span>VS</span>
                                <span>{secondTeamName}</span>
                            </div>
                            <div className='matchResults'>
                                <div className='FirstTeamScore'>           
                                    <span className='ScorePanel'>{matchData.firstCommand}</span>     
                                    <div className='ScoreButtons'>
                                        <Button onClick={() => changeScore({action: -1, team: 'firstCommand'})}>Sub</Button>
                                        <Button onClick={() => changeScore({action: 1, team: 'firstCommand'})}>Add</Button>
                                    </div>
                                </div>
                                <div className='divider'></div>
                                <div className='SecondTeamScore'>
                                    <span className='ScorePanel'>{matchData.secondCommand}</span>                    
                                    <div className='ScoreButtons'>
                                        <Button onClick={() => changeScore({action: -1, team: 'secondCommand'})}>Sub</Button>
                                        <Button onClick={() => changeScore({action: 1, team: 'secondCommand'})}>Add</Button>
                                    </div>
                                </div>
                            </div>  
                        </div> 
                    </Content>
                )
            }
        </Layout> 
    );
};

export default Organisation;