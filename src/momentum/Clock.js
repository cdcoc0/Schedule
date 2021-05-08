import React, {useState} from 'react';
import styled from 'styled-components';

const ClockContainer = styled.div`
`

const Clock = () => {
    const date = new Date();
    // const [hours, setHours] = useState(date.getHours());
    // const [minutes, setMinutes] = useState(date.getMinutes());
    const [time] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    });

    return (
        <ClockContainer>
            <h1>{`${time.hours}:${time.minutes}`}</h1>
        </ClockContainer>
    )
}

export default Clock;