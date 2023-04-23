import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Layout , List, Avatar, Spin } from 'antd';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../Store/store';

import { getTournamentsDataAction } from '../../Actions/tournamentsAction';

import 'antd/dist/antd.css';

const { Header, Content } = Layout;

const Tournaments = () => {
    const [isLoading, setLoading] = useState(true);

    const tournamentsData = useSelector((state: RootState) => state.tournaments.tournaments);

    const dispatch = useDispatch();

    useEffect(() => {
        setLoading(true);
        getTournaments();
    }, []);

    const getTournaments = async() => {
        dispatch(await getTournamentsDataAction());
        setLoading(false);
    };
    
    
    const data = tournamentsData?.map((item: {tournamentName: string, id: string, description: string}) => ({
        title: item.tournamentName,
        description: item.description,
        id: item.id,
    }));

    return (
        <Layout className='site-layout'>
            <Header className='site-layout-background pageHeader'>
                <span className='headerTitle'>Список турниров</span>
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
                                    <Link to={`/SportsOrganization/Tournaments/${item.title}`} style={{ width: '100%', height: '100%' }}>
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

export default Tournaments;