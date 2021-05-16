import React from 'react';
import {MdRemoveCircleOutline, MdCheckBoxOutlineBlank ,MdCheckBox} from 'react-icons/md';
import './TodoItem.scss'

const TodoItem = ({todo, onRemove, onToggle}) => {
    const {id, text, done} = todo;

    return (
        <div className="TodoItem">
            <div className="checkbox" onClick={() => onToggle(id)}>
                {done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoItem;