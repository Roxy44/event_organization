import { combineReducers, createStore } from '@reduxjs/toolkit';

import { routeReducer } from '../Components/Reducers/routeReducer';
import { teamsReducer } from '../Components/Reducers/teamsReducer';
import { organisationReducer } from '../Components/Reducers/organizationReducer';
import { tournamentsReducer } from '../Components/Reducers/tournamentsReducer';
import { authorizationReducer } from '../Components/Reducers/authorizationReducer';

const rootReducer = combineReducers({
    routes: routeReducer,
    organization: organisationReducer,
    teams: teamsReducer,
    tournaments: tournamentsReducer,
    authorization: authorizationReducer,
});

export const store = createStore(
    rootReducer,
);