import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Layout , List, Avatar } from 'antd';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../Store/store';

import { getTournamentsDataAction } from '../../Actions/tournamentsAction';

import 'antd/dist/antd.css';

const { Header, Content } = Layout;

const Tournaments = () => {
    const tournamentsData = useSelector((state: RootState) => state.tournaments.tournaments);

    const dispatch = useDispatch();

    useEffect(() => {
        getTournaments();
    }, []);

    const getTournaments = async() => {
        dispatch(await getTournamentsDataAction());
    };
    
    const data = tournamentsData.map((item: {tournamentName: string, id: string, description: string}) => ({
        title: item.tournamentName,
        description: item.description,
        id: item.id,
    }));

    return (
        <Layout className='site-layout'>
            <Header className='site-layout-background pageHeader'>
                <span className='headerTitle'>Tournaments list</span>
            </Header>
            <Content className='site-layout-background' style={{padding: 24 }}>
                <List
                    itemLayout='horizontal'
                    dataSource={data}
                    renderItem={(item: {title: string, id: string, description: string}) => (
                        <List.Item>
                            <Link to={`/SportsOrganization/Tournaments/${item.title}`} style={{ width: '100%', height: '100%' }}>
                                <List.Item.Meta
                                    avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
                                    title={<span>{item.title}</span>}
                                    description={item.description}
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