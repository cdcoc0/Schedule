import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const ClockContainer = styled.div`
`

const Clock = () => {
    const date = new Date();
    const [time, setTime] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
    });

    const getTime = () => {
        setTime({hours: date.getHours(), minutes: date.getMinutes()});
    }

    useEffect(() => {
        const oneMinCall =  setInterval(getTime(), 6000);
        return clearInterval(oneMinCall);
    }, [time]);
   
    // const getTime = () => {
    //     const date = new Date();
    //     setTime({
    //         hours: date.getHours(),
    //         minutes: date.getMinutes(),
    //         //seconds: date.getSeconds()
    //     });

    //     return `${time.hours}:${time.minutes}`;
    // };

    return (
        <ClockContainer>
            <h1>{`${time.hours}:${time.minutes}`}</h1>
        </ClockContainer>
    )
}

export default Clock;