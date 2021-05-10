import React, {useState} from 'react';
import styled from 'styled-components';

const UserContainer = styled.div`
`

const User = () => {    
    const loadUser = () => {
        const USER_KEY = "User";
        const USER_VAL = localStorage.getItem(USER_KEY);
        if(USER_VAL === "") {
            return (
                <form>
                    <input type="text" placeholder="Name"></input>
                    <button>enter</button>
                </form>
            );
        }
        return (<h4>{`Good Day ${USER_VAL}!`}</h4>);
    };

    return (
        <UserContainer>
            {loadUser()}
        </UserContainer>
    );
}

export default User;