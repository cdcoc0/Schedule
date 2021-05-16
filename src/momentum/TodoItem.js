import React from 'react';
import {MdRemoveCircleOutline, MdCheckBoxOutlineBlank ,MdCheckBox} from 'react-icons/md';
import './TodoItem.scss'

const TodoItem = ({todo}) => {
    return (
        <div className="TodoItem">
            <div className="checkbox">
                <MdCheckBoxOutlineBlank />
                <div className="text">{todo.text}</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoItem;