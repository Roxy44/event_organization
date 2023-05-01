import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { Avatar, Layout, List, Spin } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../types';

import { getTournamentsDataAction } from '../../Actions/tournamentsAction';

import './Results.css';

const { Header, Content } = Layout;

const Results = () => {
    const dispatch = useDispatch();

    const [isLoading, setLoading] = useState(true);

    const tournamentsData = useSelector((state: RootState) => state.tournaments.tournaments);
    
    const data = tournamentsData?.map((item: {tournamentName: string, id: string, description: string}) => ({
        title: item.tournamentName,
        description: item.description,
        id: item.id,
    }));
    
    useEffect(() => {
        setLoading(true);
        getTournaments();
    }, []);

    const getTournaments = async() => {
        dispatch(await getTournamentsDataAction());
        setLoading(false);
    };

    return (
        <Layout className='site-layout'> 
            <Header className='site-layout-background pageHeader'>
                <span className='headerTitle'>Результаты</span>    
            </Header>
            {isLoading ?
                <Spin className='Loading' tip='Loading' size='large' />
                :
                (
                    <Content className='site-layout-background' style={{padding: 24 }}>
                        <List
                            itemLayout='horizontal'
                            dataSource={data}
                            renderItem={(item: {title: string, id: string, description: string}) => (
                                <List.Item>
                                    <Link to={`/SportsOrganization/Results/${item.title}`} style={{ width: '100%', height: '100%' }}>
                                        <List.Item.Meta
                                            avatar={<Avatar src='https://api.thecatapi.com/v1/images/search' />}
                                            title={<span>{item.title}</span>}
                                            description={item.description}
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

export default Results;
