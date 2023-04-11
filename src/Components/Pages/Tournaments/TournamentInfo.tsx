import React from 'react';
import { useParams } from 'react-router-dom';

import {
    EditOutlined
} from '@ant-design/icons';

import { Layout, Button } from 'antd';
import 'antd/dist/antd.css';
import TableComponent from '../../CustomComponents/TableComponent/TableComponent';

const { Header, Content } = Layout;

const TournamentInfo = () => {
    const { name } = useParams();
    
    return (
        <Layout className='site-layout'>
            <Header className='site-layout-background pageHeader'>
                <span className='headerTitle'>{name}</span>
            </Header>
            <Content className='site-layout-background' style={{padding: 24 }}>
                <Button type='primary' className='registration'>
                    <EditOutlined />
                    Register On Tournament
                </Button>
                <TableComponent tournamentName={name} />
            </Content>
        </Layout>
    );
};

export default TournamentInfo;