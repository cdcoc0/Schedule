import React from 'react';
import Clock from './Clock';
import User from './User';
import TodoList from './TodoList';

const Momentum = () => {
    return (
        <div>
            <TodoList />
            <Clock />
            <User />
        </div>
    );
}

export default Momentum;