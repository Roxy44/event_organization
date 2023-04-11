import { useEffect } from 'react';

import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { TableDataType } from '../../types';
import { RootState } from '../../../Store/store';

import { useDispatch, useSelector } from 'react-redux';

import { getTournamentsDataAction } from '../../Actions/tournamentsAction';

import 'antd/dist/antd.css';
import './TableComponent.css';
import { Link } from 'react-router-dom';

const TableComponent = (props: { tournamentName: string | undefined}) => {
    const tournamentsData = useSelector((state: RootState) => state.tournaments.tournaments);

    const dispatch = useDispatch();

    useEffect(() => {
        getTournaments();
    }, []);

    const getTournaments = async() => {
        dispatch(await getTournamentsDataAction());
    };
    
    //add descr for every team
    const oneTournamentData = tournamentsData.filter((item: {tournamentName: string}) => item.tournamentName === props.tournamentName);

    const columns: ColumnsType<TableDataType> = [
        {
            dataIndex: 'name',
            key: 'name1',
        },
        ...oneTournamentData[0].results.map((item: any, index: number) => (
            {
                title: item.name, 
                dataIndex: 'statistic' + index, 
                key: 'name' + index,
            }
        ))
    ];

    // пофиксить момент со statistic

    // а также рендер на команду с игроками
    const data: any = oneTournamentData[0].results?.map((item: any, index: number) => (
        {
            key: 'row' + index,
            name: item.name,
            render: (name: string) => <Link to={`/SportsOrganization/Teams/${item.name}`}>{name}</Link>,
            statistic0: item.score[0],
            statistic1: item.score[1],
            statistic2: item.score[2],
        }
    ));

    return (
        <Table className='tournamentStatistic' columns={columns} dataSource={data} />
    );
};

export default TableComponent;