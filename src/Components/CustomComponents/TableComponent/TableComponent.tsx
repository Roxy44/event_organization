import { Table } from 'antd';

import { tableData } from '../componentsData';

import 'antd/dist/antd.css';
import './TableComponent.css';

const { columns, data } = tableData();

const TableComponent = () => {
    return (
        <Table className='tournamentStatistic' columns={columns} dataSource={data} />
    );
};

export default TableComponent;