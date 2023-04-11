import React from 'react';
import { List, Button, Avatar } from 'antd';

import { useSelector } from 'react-redux';

import { RootState } from '../../../../Store/store';

import 'antd/dist/antd.css';
import './Players.css';


const Players = (props: {teamName: string | undefined}) => {

    const teamData = useSelector((state: RootState) => state.teams.teams).filter((item: any) => item.teamName === props.teamName);

    const data = teamData[0].players.map((player: any) => ({
        title: player.surname + ' ' + player.name,
        id: player.id, 
    }));
    
    const openPlayerStatistic = () => {
        //console.log('click');
    };

    return (  
        <List
            itemLayout='horizontal'
            dataSource={data}
            renderItem={(item: {title: string}) => (
                <List.Item>
                    <Button 
                        className='playerButton' 
                        onClick={(): void => openPlayerStatistic()}
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