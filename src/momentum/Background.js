import React from 'react';
import styled from 'styled-components';

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
    url("https://source.unsplash.com/daily");
    background-size: cover;
    z-index: -1;
`

const Background = () => {
    return(
        <BackContainer />
    );
}

export default Background;