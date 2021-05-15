import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListDiv = styled.div`
`

const TodoList = () => {
    const [todoInput, setTodoInput] = useState('');
    const [todos, setTodos] = useState([]);

    const todoLS = localStorage.getItem('TODO');
    //const nextId = useRef(todos.length + 1);

    const onTodoChange = useCallback(e => setTodoInput(e.target.value), []);
    
    const handleInsert = useCallback(text => {
        let nextId = todoLS ? JSON.parse(todoLS).length + 1 : 1;
        const todo = {id: nextId, text, done: false};
        setTodos(todos.concat(todo));
        localStorage.setItem("TODO", JSON.stringify(todos.concat(todo)));
        nextId += 1;
        setTodoInput('');
    }, [todos, todoLS]);
    
    const onTodoSubmit = useCallback(e => {
        e.preventDefault();
        handleInsert(todoInput);
    }, [handleInsert, todoInput]);

    const getTodos = useCallback(() => {
        if(todoLS) {
            const parsedTodos = JSON.parse(todoLS);
            return parsedTodos.map(todo => <TodoItem id={todo.id} todo={todo} />);
        };
        return null;
    }, [todoLS])

    return(
        <TodoListDiv>
            <form onSubmit={onTodoSubmit}>
                <input type="text" onChange={onTodoChange} value={todoInput} />
                <button type="submit">추가</button>
            </form>
            <div>
                {getTodos()}
            </div>
        </TodoListDiv>
    );
}

//새로고침 할 때마다 state 초기화 되는거는 DB 연동하면 해결

export default TodoList;