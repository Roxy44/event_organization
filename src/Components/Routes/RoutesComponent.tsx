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
            <Route path='/' element={<Authorization /> } />
            <Route path='/News' element={<News /> } />
            <Route path='/Tournaments' element={<Tournaments />} />
            <Route path='/Tournaments/:id' element={<TournamentInfo />} />
            <Route path='/Teams' element={<Teams />} />
            <Route path='/Teams/:id' element={<TeamInfo />} />
            <Route path='/Organization' element={<Organisation /> } />
        </Routes>
    );
};

export default RoutesComponent;
