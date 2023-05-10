import React from 'react';

import { useSelector } from 'react-redux';

import News from './News/News';
import Authorization from './Auth/Authorization';

import { RootState } from '../types';

const Main = () => {
    const { authorized } = useSelector((state: RootState) => state.authorization);

    return (
        authorized ? <News /> : <Authorization />
    );
};

export default Main;
