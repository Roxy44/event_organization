import { Table } from 'antd';
import React from 'react';

const TournamentCompetitorsList = () => {
    const data = [
        {
            key: '1',
            id: 1,
            name: 'ТУСУР ФСУ',
            status: 'Зарегистрирован',
        },
        {
            key: '2',
            id: 2,
            name: 'ТГУ ФБ',
            status: 'Обрабатывается...',
        },
    ];
      
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Название команды',
            dataIndex: 'name',
            key: 'name',
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
