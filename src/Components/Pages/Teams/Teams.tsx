import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import Players from './Players/Players';

const { Header, Content } = Layout;

const Teams = () => {
    const { name } = useParams();
    
    return (
        <Layout className='site-layout'>
            <Header className='site-layout-background pageHeader'>
                <span className='headerTitle'>Team {name} roster: </span>
            </Header>
            <Content className='site-layout-background' style={{padding: 24 }}>
                <Players teamName={name} />
            </Content>
        </Layout>
    );
};

export default Teams;