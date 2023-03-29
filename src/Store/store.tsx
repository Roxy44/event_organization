import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import { routeReducer } from '../Components/Reducers/routeReducer';
import { organisationReducer } from '../Components/Reducers/organizationReducer';

import createSagaMiddleware from '@redux-saga/core'; 

import rootSaga from '../Components/Saga';

const rootReducer = combineReducers({
    routes: routeReducer,
    organization: organisationReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware), 
);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;