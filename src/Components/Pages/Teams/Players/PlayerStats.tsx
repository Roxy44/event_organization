import React from 'react';

import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content } = Layout;

const PlayerStats = () => {
    return (
        <Layout className="site-layout">
            <Header className="site-layout-background pageHeader">
                <span className='headerTitle'>header</span>
            </Header>
            <Content className="site-layout-background" style={{padding: 24 }}>
                <h1>hello</h1>
            </Content>
        </Layout>
    );
};

export default PlayerStats;