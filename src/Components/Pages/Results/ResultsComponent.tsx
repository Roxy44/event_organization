import React from 'react';
import { useParams } from 'react-router-dom';

import { Layout, Table } from 'antd';

const { Header, Content } = Layout;

export const ResultsComponent = () => {

    const { name } = useParams();

    const data = [
        {
            key: '1',
            id: 1,
            organizator: 'ТГУ',
            winner: '',
            prize_pool: '18 тыс. руб.',
        },
        {
            key: '2',
            id: 2,
            organizator: 'Микран',
            winner: '',
            prize_pool: '180 тыс. руб.',
        },
    ];
  
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Организатор',
            dataIndex: 'organizator',
            key: 'organizator',
        },
        {
            title: 'Победитель',
            dataIndex: 'winnder',
            key: 'winner',
        },
        {
            title: 'Призовой фонд',
            dataIndex: 'prize_pool',
            key: 'prize_pool',
        },
    ];

    return (
        <Layout className='site-layout'>
            <Header className='site-layout-background pageHeader'>
                <span className='headerTitle'>{name}</span>
            </Header>
            <Content className='resultsContainer'>
                <Table
                    className='resultsList' 
                    columns={columns}
                    dataSource={data}
                />
            </Content>
        </Layout>
    );
};