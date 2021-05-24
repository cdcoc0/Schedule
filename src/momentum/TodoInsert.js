import React, {useState, useCallback} from 'react';
import './styles/TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
    const [todoInput, setTodoInput] = useState('');

    const onTodoChange = useCallback(e => setTodoInput(e.target.value), []);
    
    const onTodoSubmit = useCallback(e => {
        e.preventDefault();
        onInsert(todoInput);
        setTodoInput('');
    }, [onInsert, todoInput]);

    return(
        <div className="TodoInsert">
            <form onSubmit={onTodoSubmit}>
                <input type="text" onChange={onTodoChange} value={todoInput} />
                <button type="submit">추가</button>
            </form>
        </div>
    );
};

export default TodoInsert;