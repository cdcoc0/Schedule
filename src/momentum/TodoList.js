import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import './styles/TodoList.scss';

const TodoList = ({todos, onRemove, onToggle}) => {
    return(
        <div>
            {todos && todos.map(todo => <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}/>)}
        </div>
    );
};

export default TodoList;