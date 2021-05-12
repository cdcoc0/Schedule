import React, {useState, useCallback, useRef} from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListDiv = styled.div`
`

const TodoList = () => {
    const [todoInput, setTodoInput] = useState('');
    const [todos, setTodos] = useState([]);

    const nextId = useRef(todos.length + 1);

    const onTodoChange = useCallback(e => setTodoInput(e.target.value), []);
    
    const handleInsert = useCallback(text => {
        const todo = {id: nextId.current, text, done: false};
        setTodos(todos.concat(todo));
        localStorage.setItem("TODO", JSON.stringify(todos.concat(todo)));
        nextId.current += 1;
        setTodoInput('');
    }, [todos]);
    
    const onTodoSubmit = useCallback(e => {
        e.preventDefault();
        handleInsert(todoInput);
    }, [handleInsert, todoInput]);

    return(
        <TodoListDiv>
            <form onSubmit={onTodoSubmit}>
                <input type="text" onChange={onTodoChange} value={todoInput} />
                <button type="submit">추가</button>
            </form>
            <div>
                {todos.map(todo => <TodoItem id={todo.id} todo={todo} />)}
            </div>
        </TodoListDiv>
    );
}

export default TodoList;