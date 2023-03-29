import React from 'react';
import { List, Button, Avatar } from 'antd';
import 'antd/dist/antd.css';
import './Players.css';
import { playerData } from '../../PagesData';

const Players = () => {
    const data = playerData;

    const openPlayerStatistic = () => {
        //console.log('click');
    };

    return (  
        <List
            itemLayout='horizontal'
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <Button 
                        className='playerButton' 
                        onClick={(): void => openPlayerStatistic()}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
                            title={<span>{item.title}</span>}
                            description='Player description'
                        />
                    </Button>
                </List.Item>
            )}
        />       
    );
};

export default Players;