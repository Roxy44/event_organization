import { combineReducers, createStore } from '@reduxjs/toolkit';

import { routeReducer } from '../Components/Reducers/routeReducer';
import { teamsReducer } from '../Components/Reducers/teamsReducer';
import { tournamentsReducer } from '../Components/Reducers/tournamentsReducer';
import { authorizationReducer } from '../Components/Reducers/authorizationReducer';
import { universitiesReducer } from '../Components/Reducers/universitiesReducer';

const rootReducer = combineReducers({
    routes: routeReducer,
    teams: teamsReducer,
    tournaments: tournamentsReducer,
    authorization: authorizationReducer,
    universities: universitiesReducer,
});

export const store = createStore(
    rootReducer,
);