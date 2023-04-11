import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Authorization from '../Pages/Auth/Authorization';
import News from '../Pages/News/News';
import Tournaments from '../Pages/Tournaments/Tournaments';
import TournamentInfo from '../Pages/Tournaments/TournamentInfo';
import Teams from '../Pages/Teams/Teams';
import TeamInfo from '../Pages/Teams/TeamInfo';
import Organisation from '../Pages/Organization/Organization';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path='/SportsOrganization' element={<Authorization /> } />
            <Route path='/' element={<Authorization /> } />
            <Route path='/SportsOrganization/News' element={<News /> } />
            <Route path='/SportsOrganization/Tournaments' element={<Tournaments />} />
            <Route path='/SportsOrganization/Tournaments/:name' element={<TournamentInfo />} />
            <Route path='/SportsOrganization/Teams' element={<Teams />} />
            <Route path='/SportsOrganization/Teams/:name' element={<TeamInfo />} />
            <Route path='/SportsOrganization/Organization' element={<Organisation /> } />
        </Routes>
    );
};

export default RoutesComponent;
