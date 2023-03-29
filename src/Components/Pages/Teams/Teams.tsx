import React from 'react';
import { Link } from 'react-router-dom';
import { Layout , List, Avatar } from 'antd';

import { teamsData } from '../PagesData';

import 'antd/dist/antd.css';

const { Header, Content } = Layout;

const Teams = () => {
    const data = teamsData;

    return (
        <Layout className='site-layout'>
            <Header className='site-layout-background pageHeader'>
                <span className='headerTitle'>Teams list</span>
            </Header>
            <Content className='site-layout-background' style={{padding: 24 }}>
                <List
                    itemLayout='horizontal'
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <Link to={`/Teams/${item.id}`} style={{ width: '100%', height: '100%' }}>
                                <List.Item.Meta
                                    avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
                                    title={<span>{item.title}</span>}
                                    description='Team description'
                                />
                            </Link>
                        </List.Item>
                    )}
                />
            </Content>
        </Layout>
    );
};

export default Teams;