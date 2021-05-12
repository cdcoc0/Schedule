import React from 'react';
import './TodoItem.scss'

const TodoItem = () => {
    return (
        <div className="TodoItem">
            <div><input type="checkbox" /></div>
            <div>할 일</div>
            <div><button>-</button></div>
        </div>
    );
};

export default TodoItem;