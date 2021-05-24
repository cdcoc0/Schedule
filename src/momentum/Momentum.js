import React from 'react';
import User from './User';
import ClockWeatherTemplate from './ClockWeatherTemplate';
import TodoTemplate from './TodoTemplate';

const Momentum = () => {
    return (
        <div>
            <User />
            <ClockWeatherTemplate />
            <TodoTemplate />
        </div>
    );
}

export default Momentum;

//아마 Background는 여기서