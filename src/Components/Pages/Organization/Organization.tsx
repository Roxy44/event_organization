import React, { useEffect, useState } from 'react';

import { Button, Input, Layout, List, Modal, Spin } from 'antd';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../Store/store';

import { getScoreDataAction } from '../../Actions/organizationActions';

import './Organization.css';

const { Header, Content, Footer } = Layout;

const Organisation = () => {
    const dispatch = useDispatch();

    const [isLoading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const matchData = useSelector((state: RootState) => state.organization.scoreData);
    
    const data: any[] = [matchData];

    useEffect(() => {
        setLoading(true);
        getScore();
    }, []);
    
    const getScore = async() => {
        dispatch(await getScoreDataAction());
        setLoading(false);
    };
    
    const handleOk = () => {
        setIsModalOpen(false);
    };
    
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return ( 
        <Layout className='site-layout'>
            <Modal title='Организовать турнир' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Input placeholder='поле 1'></Input>
                <Input placeholder='поле 2'></Input>
                <Input placeholder='поле 3'></Input>
                <Input placeholder='поле 4'></Input>
                <Input placeholder='поле 5'></Input>
            </Modal>
            <Header className='site-layout-background pageHeader'>
                <span className='headerTitle'>Организация спортивной деятельности</span>
            </Header>
            {isLoading ?
                <Spin className='Loading' tip='Loading' size='large' />
                :
                (
                    <Content className='site-layout-background' style={{padding: 24 }}>
                        <List
                            itemLayout='horizontal'
                            dataSource={data}
                            renderItem={(item: {name: string, tournamentName: string}) => (
                                <List.Item>
                                    <Link to={`/SportsOrganization/Organization/${item.name}`} style={{ width: '100%', height: '100%' }}>
                                        <List.Item.Meta
                                            title={<span>{item.name}</span>}
                                            description={`the match of ${item.tournamentName}`}
                                        />
                                    </Link>
                                </List.Item>
                            )}
                        />
                    </Content>
                )
            }
            <Footer style={{border: '1px solid black'}}>
                <Button type='primary' onClick={() => setIsModalOpen(true)}>Организовать матч</Button>
            </Footer>
        </Layout>
    );
};

export default Organisation;