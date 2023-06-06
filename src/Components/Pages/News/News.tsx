import React from 'react';

import { Layout, Table, Card } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { DataType } from '../../types';

import 'antd/dist/antd.css';

import './News.css';

const { Header, Content } = Layout;
const { Meta } = Card;

const News = () => {
 
    const columns: ColumnsType<DataType> = [
        {
            dataIndex: 'columnOne',
            key: 'columnOne',
        },
        {
            dataIndex: 'columnTwo',
            key: 'columnTwo',
        },
        {
            dataIndex: 'columnThree',
            key: 'columnThree',
        },
    ];
      
    const data: DataType[] = [
        {
            key: 'row1',
            columnOne: 
                <Card hoverable className='superNews'>
                    <Meta 
                        title='Спартакиада «Моспром» в «Лужниках»' 
                        description='Более 7000 зрителей посетили финал Спартакиады «Моспром» в «Лужниках»'
                    />
                </Card>,
            columnTwo: 
                <Card hoverable>
                    <Meta title='Новость 2' description='Описание 2'/>
                </Card>,
            columnThree: 
                <Card hoverable>
                    <Meta title='Новость 3' description='Описание 3'/>
                </Card>,
        },
        {
            key: 'row2',
            columnOne: 
                <Card hoverable>
                    <Meta title='Новость 4' description='Описание 4'/>
                </Card>,
            columnTwo: 
                <Card hoverable>
                    <Meta title='Новость 5' description='Описание 5'/>
                </Card>,
            columnThree: 
                <Card hoverable>
                    <Meta title='Новость 6' description='Описание 6'/>
                </Card>,
        },
        {
            key: 'row3',
            columnOne: 
                <Card hoverable>
                    <Meta title='Новость 7' description='Описание 7'/>
                </Card>,
            columnTwo: 
                <Card hoverable>
                    <Meta title='Новость 8' description='Описание 8'/>
                </Card>,
            columnThree: 
                <Card hoverable>
                    <Meta title='Новость 9' description='Описание 9'/>
                </Card>,
        },
    ];

    return (
        <Layout className='site-layout'>
            <Header className='site-layout-background pageHeader'>
                <span className='headerTitle'>Новости</span>
            </Header>
            <Content className='site-layout-background news'>
                <Table columns={columns} dataSource={data} />
            </Content>
        </Layout>
    );
};

export default News;