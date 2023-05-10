import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { RootState, TournamentDataType } from '../../../../types';


const TournamentCompetitorsList = (selectedTournament: any) => {
    const { tournamentsData } = useSelector((state: RootState) => state.tournaments);

    const filteredData = tournamentsData.filter((item: {name: string}) => item.name === selectedTournament.selectedTournament)[0];
    const data = filteredData.competitors.map((item: { name: string, status: string }, index: number) => (
        {
            key: index,
            id: index,
            name: item.name,
            status: item.status,
        }));
      
    const columns: ColumnsType<TournamentDataType> = [
        {
            title: 'Номер команды',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Название команды',
            dataIndex: 'name',
            key: 'name',
            render: (name: string) => <Link to={`/event_organization/teams/${name}`}>{name}</Link>
        },
        {
            title: 'Статус регистрации',
            dataIndex: 'status',
            key: 'status',
        },
    ];
    
    return (
        <Table
            className='competitorList' 
            columns={columns}
            dataSource={data}
        />
    );
};

export default TournamentCompetitorsList;
