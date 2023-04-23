import React from 'react';

import { Button, Layout } from 'antd';

import { useDispatch, useSelector } from 'react-redux';


import { changeScoreDataAction } from '../../Actions/organizationActions';
import { RootState } from '../../../Store/store';

const { Header, Content } = Layout;

const MatchComponent = () => {
    const dispatch = useDispatch();

    const matchData = useSelector((state: RootState) => state.organization.scoreData);

    const firstTeamName = matchData.name?.split(' ')[0];
    const secondTeamName = matchData.name?.split(' ')[2];

    const changeScore = async (data: {action: number, team: string}) => {
        dispatch(await changeScoreDataAction(data.team, data.action, matchData));
    };

    return (
        <Layout>
            <Header className='site-layout-background pageHeader'>
                <span className='headerTitle'>{`Матч: ${matchData.name}`}</span>
            </Header>
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
            </Content><div>MatchComponent</div>
        </Layout>
    );
};

export default MatchComponent;
