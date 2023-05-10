import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from '../Pages/Main';
import News from '../Pages/News/News';
import Universities from '../Pages/Universities/Universities';
import Tournaments from '../Pages/Tournaments/Tournaments';
import TournamentComponent from '../Pages/Tournaments/TournamentComponent';
import Teams from '../Pages/Teams/Teams';
import Results from '../Pages/Results/Results';
import Organisation from '../Pages/Organization/Organization';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path='/' element={<Main /> } />
            <Route path='/event_organization' element={<Main /> } />
            <Route path='/event_organization/news' element={<News /> } />
            <Route path='/event_organization/universities' element={<Universities /> } />
            <Route path='/event_organization/tournaments' element={<Tournaments />} />
            <Route path='/event_organization/tournaments/:name' element={<TournamentComponent />} />
            <Route path='/event_organization/teams/:name' element={<Teams />} />
            <Route path='/event_organization/results' element={<Results /> } />
            <Route path='/event_organization/organization' element={<Organisation /> } />
        </Routes>
    );
};

export default RoutesComponent;
