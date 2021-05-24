import React from 'react';
import Clock from './Clock';
import User from './User';
import Weather from './Weather';
import TodoTemplate from './TodoTemplate';
import styled from 'styled-components';

const ClockWeather = styled.div`
    margin-right: 7rem;
`



const Momentum = () => {
    return (
        <div>
            <User />
            <ClockWeather>
                <Clock />
                <Weather />
            </ClockWeather>
            <TodoTemplate />
        </div>
    );
}

export default Momentum;

//아마 Background는 여기서