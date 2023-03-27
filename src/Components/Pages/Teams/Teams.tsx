import React from 'react';
import { Link } from 'react-router-dom';
import { Layout , List, Avatar } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content } = Layout;

const Teams = () => {
    const data = [
        {
            title: 'Team 1',
            id: 1,
        },
        {
            title: 'Team 2',
            id: 2,
        },
        {
            title: 'Team 3',
            id: 3,
        },
        {
            title: 'Team 4',
            id: 4,
        },
        {
            title: 'Team 5',
            id: 5,
        },
        {
            title: 'Team 6',
            id: 6,
        },
        {
            title: 'Team 7',
            id: 7,
        },
        {
            title: 'Team 8',
            id: 8,
        },
    ];

    return (
        <Layout className="site-layout">
            <Header className="site-layout-background pageHeader">
                <span className='headerTitle'>Teams list</span>
            </Header>
            <Content className="site-layout-background" style={{padding: 24 }}>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                    <List.Item>
                        <Link to={`/Teams/${item.id}`} style={{ width: '100%', height: '100%' }}>
                            <List.Item.Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={<span>{item.title}</span>}
                            description="Team description"
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