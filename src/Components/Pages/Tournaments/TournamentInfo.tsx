import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import {
    EditOutlined
} from '@ant-design/icons';

import { Layout, Button } from 'antd';

import TableComponent from '../../CustomComponents/TableComponent/TableComponent';
import Timer from '../../CustomComponents/TournamentTimer/TournamentTimer';

import RegOnTournmModal from '../../Modals/RegOnTournmModal';

import 'antd/dist/antd.css';
import './Tournaments.css';

const { Header, Content } = Layout;

const TournamentInfo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [regestrationIsActive, setRegestrationStatus] = useState(true);

    const { name } = useParams();
    
    const showModal = () => {
        setIsModalOpen(true);
    };

    const endOfRegestration = () => {
        setRegestrationStatus(false);
    };

    return (
        <Layout className='site-layout'>
            <RegOnTournmModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            <Header className='site-layout-background pageHeader'>
                <span className='headerTitle'>{name}</span>
            </Header>
            <Content className='site-layout-background' style={{padding: 24 }}>
                <div className='registrationTab'>
                    <Button type='primary' className='registration' disabled={!regestrationIsActive} onClick={showModal}>
                        <EditOutlined />
                    Записаться на турнир
                    </Button>
                    <Timer endOfRegestration={() => endOfRegestration()} />
                </div>
                <TableComponent tournamentName={name} />
            </Content>
        </Layout>
    );
};

export default TournamentInfo;