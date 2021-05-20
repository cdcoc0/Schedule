import React from 'react';
import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
`;

const BackContainer = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        to right,
        rgba(20, 20, 20, 0.1) 10%,
        rgba(20, 20, 20, 0.5) 70%,
        rgba(20, 20, 20, 0.7)
    ),
    url("https://source.unsplash.com/random/1600x900");
    background-size: cover;
    z-index: -1;
    animation-name: ${fadeIn};
    animation-duration: 0.5s;
    animation-timing-function: ease-in;   
`;

const Background = () => {
    return(
        <BackContainer />
    );
}

export default Background;