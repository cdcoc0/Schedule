import React from 'react';
import Clock from './Clock';
import User from './User';
import TodoList from './TodoList';
import Background from './Background';
import Weather from './Weather';
import styled from 'styled-components';

const ClockWeather = styled.div`
    margin-right: 5rem;
`

const Momentum = () => {
    return (
        <div>
            <Background />
            <User />
            <ClockWeather>
                <Clock />
                <Weather />
            </ClockWeather>
            <TodoList />
        </div>
    );
}

export default Momentum;

//아마 Background는 여기서