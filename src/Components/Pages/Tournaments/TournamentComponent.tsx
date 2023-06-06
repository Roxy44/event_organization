import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import {
    EditOutlined
} from '@ant-design/icons';

import { Layout, Button, Switch, Input } from 'antd';

import { useSelector } from 'react-redux';
import { RootState } from '../../types';

import TableComponent from './Components/TableComponent/TableComponent';
import TournamentCompetitorsList from './Components/TournamentCompetitorsList/TournamentCompetitorsList';
import Timer from './Components/TournamentTimer/TournamentTimer';

import { changeTournamentName } from '../../Actions/tournamentsAction';

import RegOnTournmModal from './Modals/RegOnTournmModal';

import 'antd/dist/antd.css';
import './Tournaments.css';

const { Header, Content } = Layout;

const TournamentComponent = () => {
    const { userRole } = useSelector((state: RootState) => state.authorization);
    const { tournamentsData } = useSelector((state: RootState) => state.tournaments);

    const { name } = useParams();

    const filteredData = tournamentsData.filter((item: {name: string}) => item.name === name)[0];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRegestrationActive, setRegestrationStatus] = useState(true);
    const [isInputOpen, setIsInputOpen] = useState(false);
    const [title, setTitle] = useState(name);

    const competitorRole = ['admin', 'competitor'];

    const changeTitle = (value: string) => {
        setTitle(value);
    };
    
    const onOk = () => {
        changeTournamentName(title, name);
        setIsInputOpen(false);
    };  

    const showModal = () => {
        setIsModalOpen(true);
    };

    const endOfRegestration = () => {
        setRegestrationStatus(false);
    };

    const onChange = (checked: boolean) => {
        setRegestrationStatus(!checked);
    };

    return (
        <Layout className='site-layout'>
            <RegOnTournmModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} name={name} />
            <Header className='site-layout-background pageHeader'>
                <div>
                    {isInputOpen ? 
                        <div className='changeTitle'>
                            <Input value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeTitle(e.target.value)} />
                            <Button onClick={onOk}>Сохранить</Button>
                        </div> 
                        : 
                        <div>
                            <span className='headerTitle'>{title}</span>
                            <EditOutlined onClick={() => setIsInputOpen(true)} style={!competitorRole.includes(userRole) ? {display: 'none'} : {}} />
                        </div>
                    }
                </div>
            </Header>
            <Content className='site-layout-background' style={{padding: 24 }}>
                <div className='registrationTab'>
                    <div >
                        <Button 
                            type='primary' 
                            className='registration'  
                            style={!isRegestrationActive || !competitorRole.includes(userRole) || filteredData.tournament_place !== '' ? {display: 'none'} : {display: 'block'}} onClick={showModal}>
                        Подтвердить регистрацию турнира
                        </Button>
                        <Timer endOfRegestration={() => endOfRegestration()} selectedTournament={name} />
                    </div>
                    <Switch onChange={onChange} />
                </div>
                {isRegestrationActive ? <TournamentCompetitorsList selectedTournament={name} /> : <TableComponent tournamentName={name} />}
                
            </Content>
        </Layout>
    );
};

export default TournamentComponent;