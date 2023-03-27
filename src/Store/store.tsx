import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import { routeReducer } from "../Components/Reducers/routeReducer";
import createSagaMiddleware from "@redux-saga/core"; 

import rootSaga from "../Components/Saga";

const rootReducer = combineReducers({
    routes: routeReducer,
})

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware), 
);

sagaMiddleware.run(rootSaga)