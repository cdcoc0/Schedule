import React, {useState, useCallback} from 'react';
import styled from 'styled-components';

const UserDiv = styled.div`
    //flex: 1;
    //background: black;
    width: 930px;
    padding: 1rem;
    margin-top: 5rem;
    margin-left: auto;
    margin-right: 0;
    color: white;
    //margin-right: 7rem;
    font-family: "Lucida Console", Helvetica, sans-serif;
    font-size: 1.3rem;
    //font-weight: bold;
    
`
const Welcome = styled.div`
    //background-color: pink;
    width: 450px;
    margin-left: auto;
    margin-right: auto;
    font-size: 2.75rem;
    margin-bottom: 1rem;
`

const Name = styled.div`
    //background-color: green;
    font-size: 5rem;
    display: flex;
    justify-content: center;
    font-family: verdana, sans-serif;
    font-weight: bold;

`
//#B367FF

const User = () => {   
    const USER_KEY = "User"; 
    const [userInput, setUserInput] = useState('');

    const onUserChange = useCallback (
        e => {
            setUserInput(e.target.value);
            }, []);

    const onUserSubmit = useCallback (
        () => {
            //e.preventDefault();
            //새로고침 안할 수 있는 방법 찾아보기 visible true/false
            localStorage.setItem(USER_KEY, userInput);
            //setUserInput('');
            }, [userInput]);

    const loadUser = useCallback (
        () => {
        const USER_VAL = localStorage.getItem(USER_KEY);
        if(USER_VAL === '') {
            return (
                <form  onSubmit={onUserSubmit}>
                    <input type="text" placeholder="Name" 
                    value={userInput} onChange={onUserChange} />
                    <button type="submit">enter</button>
                </form>
            );
        }
        return (
            <div>
                <Welcome>Good Day</Welcome>
                <Name>{`${USER_VAL}`}</Name>
            </div>
        );
    }, [onUserChange, onUserSubmit, userInput]);

    return (
        <UserDiv>
            {loadUser()}
        </UserDiv>
    );
}

export default User;