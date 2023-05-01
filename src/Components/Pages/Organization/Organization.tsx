import React, { useEffect, useState } from 'react';

import { Button, Layout, List, Spin } from 'antd';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../types';

import { getScoreDataAction } from '../../Actions/organizationActions';

import './Organization.css';
import OrganizeTournm from './Modals/OrganizeTournm';

const { Header, Content } = Layout;

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
    
    return ( 
        <Layout className='site-layout'>
            <OrganizeTournm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            <Header className='site-layout-background pageHeader'>
                <span className='headerTitle'>Организация спортивной деятельности</span>
            </Header>
            <div className='organizationButton'>
                <Button type='primary' onClick={() => setIsModalOpen(true)}>Организовать мероприятие</Button>
            </div>
            {isLoading ?
                <Spin className='Loading' tip='Loading' size='large' />
                :
                (
                    <Content className='site-layout-background' style={{padding: 24 }}>
                        <span><b>Список матчей</b></span>
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
        </Layout>
    );
};

export default Organisation;