import React from 'react';
import Clock from './Clock';
import User from './User';
import TodoList from './TodoList';
import Background from './Background';

const Momentum = () => {
    return (
        <div>
            <Background />
            <TodoList />
            <Clock />
            <User />
        </div>
    );
}

export default Momentum;

//아마 Background는 여기서