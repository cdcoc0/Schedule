import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const DateContainer = styled.div`
`

const Dates = () => {
    const [date, setDate] = useState({
        date: new Date()
    });

    const getDate = useCallback(() => {
        setTime({date: new Date()});
    }, []);

    useEffect(() => {
        const oneMinCall = setInterval(() => getTime(), 30000);
        return () => clearInterval(oneMinCall);
    });

    const hours = time.date.getHours();
    const minutes = time.date.getMinutes();

    return (
        <DateContainer>
            <h1>{`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`}</h1>
        </DateContainer>
    )
}

export default Dates;