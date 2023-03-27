import React from 'react';
import { Link } from 'react-router-dom';
import { Layout , List, Avatar } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content } = Layout;

const Tournaments = () => {
    const data = [
        {
            title: 'Tournament 1',
            id: 1,
        },
        {
            title: 'Tournament 2',
            id: 2,
        },
        {
            title: 'Tournament 3',
            id: 3,
        },
        {
            title: 'Tournament 4',
            id: 4,
        },
        {
            title: 'Tournament 5',
            id: 5,
        },
        {
            title: 'Tournament 6',
            id: 6,
        },
        {
            title: 'Tournament 7',
            id: 7,
        },
        {
            title: 'Tournament 8',
            id: 8,
        },
    ];

    return (
        <Layout className="site-layout">
            <Header className="site-layout-background pageHeader">
                <span className='headerTitle'>Tournaments list</span>
            </Header>
            <Content className="site-layout-background" style={{padding: 24 }}>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                    <List.Item>
                        <Link to={`/Tournaments/${item.id}`} style={{ width: '100%', height: '100%' }}>
                            <List.Item.Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={<span>{item.title}</span>}
                            description="Tournament description"
                            />
                        </Link>
                    </List.Item>
                    )}
                />
            </Content>
        </Layout>
    );
};

export default Tournaments;