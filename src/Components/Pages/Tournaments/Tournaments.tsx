import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { Button, Layout , Spin, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';

import { useSelector } from 'react-redux';

import { RootState, TournamentsDataType } from '../../types';

//import { getTournamentsDataAction } from '../../Actions/tournamentsAction';

import 'antd/dist/antd.css';

const { Header, Content } = Layout;

const Tournaments = () => {
    const { userRole } = useSelector((state: RootState) => state.authorization);
    
    const organizatorRole = ['admin', 'organizator'];

    const [isLoading, setLoading] = useState(true);

    //const dispatch = useDispatch();

    const { tournamentsData } = useSelector((state: RootState) => state.tournaments);

    useEffect(() => {
        setLoading(true);
        getTournaments();
    }, []);

    const getTournaments = async() => {
        //dispatch(await getTournamentsDataAction());
        setLoading(false);
    };

    const data = tournamentsData?.map((item: {name: string, main: string, period: any}) => ({
        name: item.name,
        main: item.main,
        period: item.period,
        notify: item,
    }));

    const columns: ColumnsType<TournamentsDataType> = [
        {
            title: 'Наименование',
            dataIndex: 'name',
            key: 'name',
            render: (name) => <Link to={`/event_organization/tournaments/${name}`} style={{ width: '100%', height: '100%' }}>{name}</Link>
        },
        {
            title: 'Ответственный',
            dataIndex: 'main',
            key: 'main',
        },
        {
            title: 'Сроки проведения',
            dataIndex: 'period',
            key: 'period',
        },
        {
            dataIndex: 'notify',
            key: 'notify',
            render: (tournament) => <Button type='primary' disabled={tournament.tournament_place === ''} style={!organizatorRole.includes(userRole) ? {display: 'none'} : {}}>Уведомить</Button>
        },
    ];
    
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
                        <Table className='tournamentStatistic' columns={columns} dataSource={data} pagination={false} />
                    </Content>
                )
            }
        </Layout>
    );
};

export default Tournaments;