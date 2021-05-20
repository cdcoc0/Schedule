import React from 'react';
import Clock from './Clock';
import User from './User';
import TodoList from './TodoList';
import Background from './Background';
import Weather from './Weather';

const Momentum = () => {
    return (
        <div>
            <Background />
            <Clock />
            <Weather />
            <User />
            <TodoList />
        </div>
    );
}

export default Momentum;

//아마 Background는 여기서