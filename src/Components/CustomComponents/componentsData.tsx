import type { ColumnsType } from 'antd/es/table';

import { TableDataType } from '../types';

export const tableData = () => {
    const columns: ColumnsType<TableDataType> = [
        {
            dataIndex: 'name',
            key: 'name1',
        },
        {
            title: 'Name1',
            dataIndex: 'statistic1',
            key: 'name2',
        },
        {
            title: 'Name2',
            dataIndex: 'statistic2',
            key: 'name3',
        },
        {
            title: 'Name3',
            dataIndex: 'statistic3',
            key: 'name4',
        },
        {
            title: 'Name4',
            dataIndex: 'statistic4',
            key: 'name5',
        },
    ];
    
    const data: TableDataType[] = [
        {
            key: 'row1',
            name: 'Name1',
            statistic1: null,
            statistic2: Math.round(Math.random() * 4),
            statistic3: Math.round(Math.random() * 4),
            statistic4: Math.round(Math.random() * 4),
        },
        {
            key: 'row2',
            name: 'Name2',
            statistic1: Math.round(Math.random() * 4),
            statistic2: null,
            statistic3: Math.round(Math.random() * 4),
            statistic4: Math.round(Math.random() * 4),
        },
        {
            key: 'row3',
            name: 'Name3',
            statistic1: Math.round(Math.random() * 4),
            statistic2: Math.round(Math.random() * 4),
            statistic3: null,
            statistic4: Math.round(Math.random() * 4),
        },
        {
            key: 'row4',
            name: 'Name4',
            statistic1: Math.round(Math.random() * 4),
            statistic2: Math.round(Math.random() * 4),
            statistic3: Math.round(Math.random() * 4),
            statistic4: null,
        },
    ];

    return {
        columns,
        data
    };
};
