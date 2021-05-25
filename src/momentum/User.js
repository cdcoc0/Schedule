import React, {useState, useCallback} from 'react';
import {MdSubdirectoryArrowLeft} from 'react-icons/md';
import styled from 'styled-components';

const UserForm = styled.form`
    //background-color: black;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 4rem;

    input {
        //flex: 1;
        background: none;
        outline: none;
        border: none;
        width: 250px;
        padding: 0.75rem;
        font-size: 1rem;
       // background: #e2e2e2;
       border-bottom: 3px solid #e2e2e2;
       &::placeholder {
           color: #e2e2e2;
       }
    }

    svg {
        background: none;
        outline: none;
        border: none;
        //background: #c890ff;
        border: 2px solid #c890ff;
        font-size: 1.5rem;
        color: #c890ff;
        padding: 0.25rem;
        margin-left: 1.5rem;
        border-radius: 4px;
        cursor: pointer;
        transition: 0.1s background ease-in;
        &:hover {
            background: #f0e1ff8a;
            color: #be80fc;
        }
    }
`

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
    const [user, setUser] = useState('');
    const USER_VAL = localStorage.getItem(USER_KEY);

    const onUserChange = useCallback (
        e => {
            setUserInput(e.target.value);
            }, []);

    const onUserSubmit = useCallback (
        (e) => {
            e.preventDefault();
            //새로고침 안할 수 있는 방법 찾아보기 visible true/false
            localStorage.setItem(USER_KEY, userInput);
            setUser(userInput);
            //setUserInput('');
            }, [userInput]);

    // const loadUser = useCallback (
    //     () => {
    //     if(USER_VAL === '') {
    //         return (
    //             <UserForm  onSubmit={onUserSubmit}>
    //                 <input type="text" placeholder="Name" 
    //                 value={userInput} onChange={onUserChange} />
    //                 <MdSubdirectoryArrowLeft type="submit" />
    //                 {/* <button type="submit">enter</button> */}
    //             </UserForm>
    //         );
    //     }
    //     return (
    //         <div>
    //             <Welcome>Good Day</Welcome>
    //             <Name>{`${USER_VAL}`}</Name>
    //         </div>
    //     );
    // }, [onUserChange, onUserSubmit, userInput]);

    return (
        <UserDiv>
            {user === '' ? 
            (<UserForm  onSubmit={onUserSubmit}>
                <input type="text" placeholder="Name" 
                value={userInput} onChange={onUserChange} />
                <MdSubdirectoryArrowLeft type="submit" />
            </UserForm>) : 
            (<div>
                <Welcome>Good Day</Welcome>
                <Name>{`${USER_VAL}`}</Name>
            </div>)}
        </UserDiv>
    );
}

export default User;