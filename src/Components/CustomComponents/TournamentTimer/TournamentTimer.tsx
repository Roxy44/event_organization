import React from 'react';
import { useState, useEffect } from 'react';

const Timer = (props: any) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = 'April, 27, 2023';

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
                `To The End: ${days} д. ${hours} ч. ${minutes} м. ${seconds} с.`
                :
                'To The End: 0 д. 0 ч. 0 м. 0 с.'
            }
        </div>
    );
};

export default Timer;