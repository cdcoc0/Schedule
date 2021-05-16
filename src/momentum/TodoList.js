import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListDiv = styled.div`
`

const TodoList = () => {
    const todoLS = localStorage.getItem('TODO');
    const [todoInput, setTodoInput] = useState('');
    const [todos, setTodos] = useState(todoLS ? JSON.parse(todoLS) : []);

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

    const onRemove = useCallback(id => {
        const filter = todos.filter(todo => todo.id !== id);
        setTodos(filter);
        localStorage.setItem("TODO", filter ? JSON.stringify(filter) : null);
    }, [todos]);

    const getTodos = useCallback(() => {
        if(todoLS) {
            const parsedTodos = JSON.parse(todoLS);
            return parsedTodos.map(todo => <TodoItem id={todo.id} todo={todo} onRemove={onRemove} />);
        };
        return null;
    }, [todoLS, onRemove])

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

export default TodoList;