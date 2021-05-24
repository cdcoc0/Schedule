import React from 'react';
import User from './User';
import ClockWeatherTemplate from './ClockWeatherTemplate';
import TodoTemplate from './TodoTemplate';
import styled from 'styled-components';

const Top = styled.div`
    display: flex;
`

const Momentum = () => {
    return (
        <div>
            <Top>
                <User />
                <ClockWeatherTemplate />
            </Top>
            <TodoTemplate />
        </div>
    );
}

export default Momentum;

//아마 Background는 여기서