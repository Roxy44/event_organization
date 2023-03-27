import React from 'react';
import { List, Button, Avatar } from 'antd';
import 'antd/dist/antd.css';
import './Players.css';

const Players = () => {
    const data = [
        {
            title: 'Player 1',
            id: 1,
        },
        {
            title: 'Player 2',
            id: 2,
        },
        {
            title: 'Player 3',
            id: 3,
        },
        {
            title: 'Player 4',
            id: 4,
        },
        {
            title: 'Player 5',
            id: 5,
        },
        {
            title: 'Player 6',
            id: 6,
        },
        {
            title: 'Player 7',
            id: 7,
        },
        {
            title: 'Player 8',
            id: 8,
        },
    ];

    const openPlayerStatistic = () => {
        console.log('click')
    }

    return (  
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
            <List.Item>
                <Button 
                    className='playerButton' 
                    onClick={(): void => openPlayerStatistic()}
                    >
                    <List.Item.Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title={<span>{item.title}</span>}
                        description="Player description"
                    />
                </Button>
            </List.Item>
            )}
        />       
    );
};

export default Players;