import React, { useEffect, useState } from 'react';

import { Button, Layout , Spin, Table } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/lib/table';

import { useDispatch, useSelector } from 'react-redux';

import { RootState, UniversitiesDataType } from '../../types';

import AddUniversityModal from './Modals/AddUniversityModal';

import { DeleteUniversityAction } from '../../Actions/universitiesAction';

import 'antd/dist/antd.css';
import './Universities.css';

const { Header, Content } = Layout;

const Universities = () => {
    const [isLoading, setLoading] = useState(true);

    const { universitiesData } = useSelector((state: RootState) => state.universities);

    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const data: any = universitiesData?.map((item: {id: number, name: string, main: string, number: string, email: string}) => ({
        key: item.id,
        name: item.name,
        main: item.main,
        number: item.number,
        email: item.email,
        actions: item.id
    }));

    useEffect(() => {
        setLoading(true);
        getTournaments();
    }, []);

    const getTournaments = async() => {
        //dispatch(await getUniversitiesDataAction());
        setLoading(false);
    };
    
    const deleteUniversity = (id: number) => {
        dispatch(DeleteUniversityAction(universitiesData, id));
        dispatch({ type: 'SET_MIN_ID', payload: id });
    };

    const columns: ColumnsType<UniversitiesDataType> = [
        {
            title: 'Наименование',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Ответственный',
            dataIndex: 'main',
            key: 'main',
        },
        {
            title: 'Телефон',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'Почта',
            dataIndex: 'email',
            key: 'email',
            render: (email) => <span className='link'>{email}</span>
        },
        {
            title: 'Действия',
            dataIndex: 'actions',
            key: 'actions',
            render: (id) => <div className='actions' onClick={() => deleteUniversity(id)}><DeleteOutlined /></div>
        },
    ];

    return (
        <Layout className='site-layout'>
            <Header className='site-layout-background pageHeader'>
                <span className='headerTitle'>Список университетов</span>
            </Header>
            {isLoading ?
                <Spin className='Loading' tip='Loading' size='large' />
                :
                (      
                    <Content className='site-layout-background' style={{padding: 24 }}>
                        <AddUniversityModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
                        <Button type='primary' onClick={() => setIsModalOpen(true)}>Добавить университет</Button>
                        <Table className='tournamentStatistic' columns={columns} dataSource={data} pagination={false} />
                    </Content>  
                )
            }
        </Layout>
    );
};

export default Universities;