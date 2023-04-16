import React, { useEffect, useState } from 'react';
import { List, Button, Avatar, Spin } from 'antd';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../../Store/store';

import { getTeamsDataAction } from '../../../Actions/teamsActions';

import 'antd/dist/antd.css';
import './Players.css';


const Players = (props: {teamName: string | undefined}) => {
    const [isLoading, setLoading] = useState(true);

    const teamData = useSelector((state: RootState) => state.teams.teams).filter((item: any) => item.teamName === props.teamName);
    const dispatch = useDispatch();

    useEffect(() => {
        setLoading(true);
        getTeams();
    }, []);

    const getTeams = async() => {
        dispatch(await getTeamsDataAction());
        setLoading(false);
    };

    const data = teamData[0]?.players.map((player: any) => ({
        title: player.surname + ' ' + player.name,
        id: player.id, 
    }));
    
    const openPlayerStatistic = () => {
        //console.log('click');
    };

    return ( 
        isLoading ? 
            <Spin className='Loading' tip='Loading' size='large' /> 
            : 
            <List
                itemLayout='horizontal'
                dataSource={data}
                renderItem={(item: {title: string}) => (
                    <List.Item>
                        <Button 
                            className='playerButton' 
                            onClick={openPlayerStatistic}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
                                title={<span>{item.title}</span>}
                            />
                        </Button>
                    </List.Item>
                )}
            />       
    );
};

export default Players;