import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { Button, Spin, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { RootState, TournamentTableDataType, TournamentMatchesDataType } from '../../../../types';

import { useSelector } from 'react-redux';

//import { getTournamentsDataAction } from '../../../../Actions/tournamentsAction';

import 'antd/dist/antd.css';
import './TableComponent.css';
import AddMatchModal from './AddMatchModal';

const TableComponent = (props: { tournamentName: string | undefined}) => {
    const [isLoading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { tournamentsData } = useSelector((state: RootState) => state.tournaments);

    //const dispatch = useDispatch();

    useEffect(() => {
        setLoading(true);
        getTournaments();
    }, []);

    const getTournaments = async() => {
        //dispatch(await getTournamentsDataAction());
        setLoading(false);
    };

    const filteredData = tournamentsData.filter((item: {name: string}) => item.name === props.tournamentName);

    const withoutFilteredData = tournamentsData.filter((item: {name: string}) => item.name !== props.tournamentName);

    const columnsTable: ColumnsType<TournamentTableDataType> = [
        {
            dataIndex: 'name',
            key: 'name',
            render: (name) => <Link to={`/event_organization/Teams/${name}`}>{name}</Link>
        },  
        ...filteredData[0]?.competitors?.map((item: any, index: number) => (
            {
                title: item.name, 
                dataIndex: 'statistic' + index, 
                key: item.name + index,
            }
        )), 
        {
            title: 'Итог',
            dataIndex: 'result',
            key: 'result',
        }, 
        {
            title: 'Выигрыши',
            dataIndex: 'wins',
            key: 'wins',
        }, 
        {
            title: 'Проигрыши',
            dataIndex: 'loses',
            key: 'loses',
        }, 
        {
            title: 'Очки',
            dataIndex: 'score',
            key: 'score',
        }, 
    ];

    const tableData: any = filteredData[0]?.results?.map((item: any, index: number) => {

        const newItem: any = {
            key: 'row1' + index,
            name: filteredData[0]?.competitors[index].name,
            result: item.scores.length - 1,
            wins: item.scores.filter((score: any) => score.result === 'win').length,
            loses: item.scores.filter((score: any) => score.result === 'lose').length,
            score: item.scores.reduce((acc: any, curr: any) => acc + curr.winScore, 0),
        };

        item.scores.forEach((_: any, scoreIndex: number) => {
            newItem['statistic' + scoreIndex] = item.scores[scoreIndex]?.winScore + ':' + item.scores[scoreIndex]?.loseScore;
        });

        return newItem;
    });

    const columnsMatches: ColumnsType<TournamentMatchesDataType> = [
        {
            title: 'Дата',
            dataIndex: 'date',
            key: 'date',
        },   
        {
            title: 'Команды',
            dataIndex: 'teams',
            key: 'teams',
        }, 
        {
            title: 'Результат',
            dataIndex: 'result',
            key: 'result',
        },   
    ];
        
    const matchesData: any = filteredData[0]?.matchesData?.map((item: any, index: number) => (
        {
            key: 'row2' + index,
            date: item.date,
            teams: item.teams,
            result: item.result,
        }
    ));

    return (
        isLoading ? 
            <Spin className='Loading' tip='Loading' size='large' />
            :
            <div>
                <AddMatchModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} tournamentsData={withoutFilteredData} filteredData={filteredData[0]} />
                <Table className='tournamentStatistic' columns={columnsTable} dataSource={tableData} pagination={false} />
                <div>
                    <Button className='matchesButton' type='primary' onClick={() => setIsModalOpen(true)}>Добавить матч</Button>
                </div>
                <Table className='matchStatistic' columns={columnsMatches} dataSource={matchesData} pagination={false} />
            </div>
            
    );
};

export default TableComponent;