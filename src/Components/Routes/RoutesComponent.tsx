import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Authorization from '../Pages/Auth/Authorization';
import News from '../Pages/News/News';
import Tournaments from '../Pages/Tournaments/Tournaments';
import TournamentComponent from '../Pages/Tournaments/TournamentComponent';
import Teams from '../Pages/Teams/Teams';
import Results from '../Pages/Results/Results';
import Organisation from '../Pages/Organization/Organization';
import MatchComponent from '../Pages/Organization/MatchComponent';
import { ResultsComponent } from '../Pages/Results/ResultsComponent';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path='/SportsOrganization' element={<Authorization /> } />
            <Route path='/' element={<Authorization /> } />
            <Route path='/SportsOrganization/News' element={<News /> } />
            <Route path='/SportsOrganization/Tournaments' element={<Tournaments />} />
            <Route path='/SportsOrganization/Tournaments/:name' element={<TournamentComponent />} />
            <Route path='/SportsOrganization/Teams/:name' element={<Teams />} />
            <Route path='/SportsOrganization/Results' element={<Results /> } />
            <Route path='/SportsOrganization/Results/:name' element={<ResultsComponent /> } />
            <Route path='/SportsOrganization/Organization' element={<Organisation /> } />
            <Route path='/SportsOrganization/Organization/:name' element={<MatchComponent />} />
        </Routes>
    );
};

export default RoutesComponent;
