import React from 'react';
import './TodoItem.scss'

const TodoItem = ({todo}) => {
    return (
        <div className="TodoItem">
            <div><input type="checkbox" checked={todo.done} /></div>
            <div>{todo.text}</div>
            <div><button>-</button></div>
        </div>
    );
};

export default TodoItem;