import React, { useEffect, useState } from 'react';

import { Layout, Spin, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';

import { useSelector } from 'react-redux';
import { RootState, ResultsDataType } from '../../types';

//import { getTournamentsDataAction } from '../../Actions/tournamentsAction';

import './Results.css';


const { Header, Content } = Layout;

const Results = () => {
    //const dispatch = useDispatch();

    const [isLoading, setLoading] = useState(true);

    const { tournamentsData } = useSelector((state: RootState) => state.tournaments);
    const { universitiesData } = useSelector((state: RootState) => state.universities);
    

    useEffect(() => {
        setLoading(true);
        getTournaments();
    }, []);

    const getTournaments = async() => {
        //dispatch(await getTournamentsDataAction());
        setLoading(false);
    };

    const columnsTable: ColumnsType<ResultsDataType> = [
        {
            title: 'Университет \\ Вид',
            dataIndex: 'name',
            key: 'name',
        },  
        ...tournamentsData.map((item: any, index: number) => (
            {
                title: item.name, 
                dataIndex: 'sport' + index, 
                key: item.name + index,
            }
        )), 
        {
            title: 'Очки',
            dataIndex: 'score',
            key: 'score',
        },
        {
            title: 'Результаты',
            dataIndex: 'result',
            key: 'result',
        }, 
    ];

    // const score = tournamentsData.map((item: any) => (
    //     item.results.map((score: any) => (
    //         score.scores.reduce((acc: any, curr: any) => acc + curr.winScore, 0)
    //     ))
    // ));

    const tableData: any = universitiesData.map((university: any, uniIndex: number) => { 
        
        const newItem: any = {
            key: 'row1' + uniIndex,
            name: university.name,
            result: uniIndex + 1,
            score: uniIndex === 0 ? 7 : uniIndex === 1 ? 5 : 3,
        };

        tournamentsData.forEach((item: any, itemIndex: number) => {
            newItem['sport' + itemIndex] = item.results[uniIndex].scores.reduce((acc: any, curr: any) => acc + curr.winScore, 0);
            //newItem['score'] = score[itemIndex][uniIndex];
        });

        return newItem;
    });
    
  
    return (
        <Layout className='site-layout'>
            <Header className='site-layout-background pageHeader'>
                <span className='headerTitle'>Результаты</span>
            </Header>
            <Content className='resultsContainer'>
                {isLoading ? <Spin className='Loading' tip='Loading' size='large' />
                    : <Table
                        className='resultsList' 
                        columns={columnsTable}
                        dataSource={tableData}
                        pagination={false}
                    />}
            </Content>
        </Layout>
    );
};

export default Results;
