import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListDiv = styled.div`
`

const TodoList = () => {
    const [todoInput, setTodoInput] = useState('');
    const [todos, setTodos] = useState([
        {
            id: 0,
            text: '',
            done: false
        },
        
    ]);

    const onTodoChange = useCallback(e => setTodoInput(e.target.value), []);
    const onTodoSubmit = useCallback(e => {
        e.preventDefault();
        setTodos(todos.concat({id: todos.length + 1, text: todoInput, done: false}));
        //localStorage.setItem();
        setTodoInput('');
    }, [todos, setTodos]);

    return(
        <TodoListDiv>
            <form onSubmit={onTodoSubmit}>
                <input type="text" onChange={onTodoChange} />
                <button>추가</button>
            </form>
            <div>
                {todos.map(todo => <TodoItem />)}
            </div>
        </TodoListDiv>
    );
}

export default TodoList;