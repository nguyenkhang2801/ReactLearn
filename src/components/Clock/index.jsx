import React, { useEffect, useState } from 'react';

Clock.propTypes = {

};

function formatDate(now) {

    const hour = `0${now.getHours()}`.slice(-2);
    const min = `0${now.getMinutes()}`.slice(-2);
    const sec = `0${now.getSeconds()}`.slice(-2);

    return `${hour}:${min}:${sec}`;
}

function Clock(props) {
    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();
            const newTimeString = formatDate(now);
            setTimeString(newTimeString);
        }, 1000);

        return () => {
            clearInterval(clockInterval);
        };
    }, []);



    return (
        <p>{timeString}</p>
    );
}

export default Clock;