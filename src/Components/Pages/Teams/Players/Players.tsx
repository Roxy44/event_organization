import React, { useEffect, useState } from 'react';
import { List, Button, Spin } from 'antd';

import { useSelector } from 'react-redux';

import { RootState } from '../../../types';

//import { getTeamsDataAction } from '../../../Actions/teamsActions';

import 'antd/dist/antd.css';
import './Players.css';


const Players = (props: {teamName: string | undefined}) => {
    const [isLoading, setLoading] = useState(true);

    const teamData = useSelector((state: RootState) => state.teams.teamsData).filter((item: any) => item.name === props.teamName);
    //const dispatch = useDispatch();

    useEffect(() => {
        setLoading(true);
        getTeams();
    }, []);

    const getTeams = async() => {
        //dispatch(await getTeamsDataAction());
        setLoading(false);
    };

    const data = teamData[0]?.players.map((player: any) => ({
        // title: player.surname + ' ' + player.name,
        // id: player.id, 
    }));
    
    const openPlayerStatistic = () => {
        
    };

    return ( 
        isLoading ? 
            <Spin className='Loading' tip='Loading' size='large' /> 
            : 
            <List
                itemLayout='horizontal'
                dataSource={data}
                renderItem={(item: {name: string}) => (
                    <List.Item>
                        <Button 
                            className='playerButton' 
                            onClick={openPlayerStatistic}
                        >
                            <List.Item.Meta
                                title={<span>{item.name}</span>}
                            />
                        </Button>
                    </List.Item>
                )}
            />       
    );
};

export default Players;