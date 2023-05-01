import { useEffect, useState } from 'react';

import { List, Spin, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { TableDataType, RootState } from '../../types';

import { useDispatch, useSelector } from 'react-redux';

import { getTournamentsDataAction } from '../../Actions/tournamentsAction';

import 'antd/dist/antd.css';
import './TableComponent.css';
import { Link } from 'react-router-dom';

const TableComponent = (props: { tournamentName: string | undefined}) => {
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

    //add descr for every team
    const oneTournamentData = tournamentsData.filter((item: {tournamentName: string}) => item.tournamentName === props.tournamentName);

    const columns: ColumnsType<TableDataType> = [
        {
            dataIndex: 'name',
            key: 'name1',
            render: (name) => (<Link to={`/SportsOrganization/Teams/${name}`}>{name}</Link>)
        },
        ...oneTournamentData[0]?.results?.map((item: any, index: number) => (
            {
                title: item.name, 
                dataIndex: 'statistic' + index, 
                key: 'name' + index,
            }
        ))
    ];

    // пофиксить момент со statistic
    const data: any = oneTournamentData[0].results?.map((item: any, index: number) => (
        {
            key: 'row' + index,
            name: item.name,
            statistic0: item.score[0],
            statistic1: item.score[1],
            statistic2: item.score[2],
        }
    ));

    const dataSource: any = [
        {
            id: 0,
            firstTeam: 'FSU',
            secondTeam: 'RTF',
        },
        {
            id: 1,
            firstTeam: 'FSU',
            secondTeam: 'KaRoZah',
        },
        {
            id: 2,
            firstTeam: 'RTF',
            secondTeam: 'KaRoZah',
        }
    ];

    return (
        isLoading ? 
            <Spin className='Loading' tip='Loading' size='large' />
            :
            <div>
                <Table className='tournamentStatistic' columns={columns} dataSource={data} pagination={false} />
                <List
                    className='tournamentsMatches'
                    header={<div>30.04.23</div>}
                    bordered
                    dataSource={dataSource}
                    renderItem={(item: any) => <List.Item>{`${item.firstTeam} - ${item.secondTeam}`}</List.Item>}
                />
            </div>
            
    );
};

export default TableComponent;