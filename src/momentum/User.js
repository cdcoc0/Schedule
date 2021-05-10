import React, {useState, useCallback} from 'react';
import styled from 'styled-components';

const UserContainer = styled.div`
`

const User = () => {   
    const USER_KEY = "User"; 
    const [userInput, setUserInput] = useState("");

    const onChange = useCallback (
        e => {
            setUserInput(e.target.value);
            }, []);

    const onSubmit = useCallback (
        () => {
            //e.preventDefault();
            //새로고침 안할 수 있는 방법 찾아보기 visible true/false
            localStorage.setItem(USER_KEY, userInput);
            //setUserInput("");
            }, [userInput]);

    const loadUser = useCallback (
        () => {
        const USER_VAL = localStorage.getItem(USER_KEY);
        if(USER_VAL === "") {
            return (
                <form  onSubmit={onSubmit}>
                    <input type="text" placeholder="Name" 
                    value={userInput} onChange={onChange} />
                    <button>enter</button>
                </form>
            );
        }
        return (<h4>{`Good Day ${USER_VAL}!`}</h4>);
    }, [onChange, onSubmit, userInput]);

    return (
        <UserContainer>
            {loadUser()}
        </UserContainer>
    );
}

export default User;