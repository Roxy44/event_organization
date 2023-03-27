import React from 'react';

import { Layout, Table, Card } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import 'antd/dist/antd.css';

import './News.css';

const { Header, Content } = Layout;
const { Meta } = Card;

interface DataType {
    key: string;
    columnOne: Object;
    columnTwo: Object;
    columnThree: Object;
    columnFour: Object;
}

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
        {
            dataIndex: 'columnFour',
            key: 'columnFour',  
        },
    ];
      
    const data: DataType[] = [
        {
            key: 'news1',
            columnOne: 
                <Card hoverable>
                    <Meta title="News 1" description="description 1"/>
                </Card>,
            columnTwo: 
                <Card hoverable>
                    <Meta title="News 2" description="description 2"/>
                </Card>,
            columnThree: 
                <Card hoverable>
                    <Meta title="News 3" description="description 3"/>
                </Card>,
            columnFour: 
                <Card hoverable>
                    <Meta title="News 4" description="description 4"/>
                </Card>,
        },
        {
            key: 'news2',
            columnOne: 
                <Card hoverable>
                    <Meta title="News 5" description="description 5"/>
                </Card>,
            columnTwo: 
                <Card hoverable>
                    <Meta title="News 6" description="description 6"/>
                </Card>,
            columnThree: 
                <Card hoverable>
                    <Meta title="News 7" description="description 7"/>
                </Card>,
            columnFour: 
                <Card hoverable>
                    <Meta title="News 8" description="description 8"/>
                </Card>,
        },
        {
            key: 'news2',
            columnOne: 
                <Card hoverable>
                    <Meta title="News 9" description="description 9"/>
                </Card>,
            columnTwo: 
                <Card hoverable>
                    <Meta title="News 10" description="description 10"/>
                </Card>,
            columnThree: 
                <Card hoverable>
                    <Meta title="News 11" description="description 11"/>
                </Card>,
            columnFour: 
                <Card hoverable>
                    <Meta title="News 12" description="description 12"/>
                </Card>,
        },
    ];

    return (
        <Layout className="site-layout">
            <Header className="site-layout-background pageHeader">
                <span className='headerTitle'>News</span>
            </Header>
            <Content className="site-layout-background news">
                <Table columns={columns} dataSource={data} />
            </Content>
        </Layout>
    );
};

export default News;