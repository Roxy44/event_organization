import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Layout , List, Avatar } from 'antd';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../Store/store';

import { getTeamsDataAction } from '../../Actions/teamsActions';

import 'antd/dist/antd.css';

const { Header, Content } = Layout;

const Teams = () => {
    const teamsData = useSelector((state: RootState) => state.teams.teams);

    const dispatch = useDispatch();

    useEffect(() => {
        getTeams();
    }, []);

    const getTeams = async() => {
        dispatch(await getTeamsDataAction());
    };
    
    const data = teamsData.map((item: {teamName: string, id: string, description: string}) => ({
        title: item.teamName,
        description: item.description,
        id: item.id,
    }));

    return (
        <Layout className='site-layout'>
            <Header className='site-layout-background pageHeader'>
                <span className='headerTitle'>List of all available teams</span>
            </Header>
            <Content className='site-layout-background' style={{padding: 24 }}>
                <List
                    itemLayout='horizontal'
                    dataSource={data}
                    renderItem={(item: {title: string, id: string, description: string}) => (
                        <List.Item>
                            <Link to={`/SportsOrganization/Teams/${item.title}`} style={{ width: '100%', height: '100%' }}>
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

export default Teams;