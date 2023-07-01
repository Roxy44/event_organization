import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../types';

import moment from 'moment';

const Timer = (props: any) => {
    const { tournamentsData } = useSelector((state: RootState) => state.tournaments);

    const filteredData = tournamentsData.filter((item: {name: string}) => item.name === props.selectedTournament)[0];
    
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    
    const deadline = moment(filteredData.period?.split(' - ')[1], 'MMMM, 1, YYYY').locale('en').format('MMM, 1, YYYY');

    const getTime = (deadline: string) => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    const endData = days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;

    if (endData < 0) {
        props.endOfRegestration();
    }

    useEffect(() => {
        if (endData >= 0) {
            const interval = setInterval(() => getTime(deadline), 1000);
            return () => clearInterval(interval);
        }
    }, []);

    return (
        <div className='timer' >
            {endData >= 0 ? 
                `До конца регистрации: ${days} д. ${hours} ч. ${minutes} м. ${seconds} с.`
                :
                'До конца регистрации: 0 д. 0 ч. 0 м. 0 с.'
            }
        </div>
    );
};

export default Timer;