import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components';

const WeatherContainer = styled.div`
    color: white;
    font-family: "Lucida Console", Helvetica, sans-serif;
`

const Location = styled.div`
    display: flex;
    flex-direction: row-reverse;
`
const Desc = styled.div`
    display: flex;
    flex-direction: row-reverse;
`

const Weather = () => {
    const [weather, setWeather] = useState({
        place: 'Seoul, Korea',
        temperature: 0,
        description: 'Clear'
    });

    const getWeather = useCallback((lat, lon) => {
        const API_KEY = "bae1076bc4c9ce19a1bd0aa7f04a7d96";
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(response => {
            return response.json();
        }).then(json => {
            const result = {
                place: json.name,
                temperature: Math.floor(json.main.temp),
                description: json.weather[0].main
            };
            console.log(json);
            setWeather({
                place: result.place,
                temperature: result.temperature,
                description: result.description
            });
        });
    }, []);
    
    const saveCoords = useCallback(coordsObj => {
        localStorage.setItem("COORDS", JSON.stringify(coordsObj));
    }, []);
    
    const geoSuccess = useCallback(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const coordsObj = {
            latitude,
            longitude
        };
        saveCoords(coordsObj);
        getWeather(latitude, longitude);
    }, []);
    
    const geoErr = useCallback(() => {
        console.log("geolocation error");
    }, []);
    
    const getCoords = useCallback(() => {
        navigator.geolocation.getCurrentPosition(geoSuccess, geoErr);
    }, []);
    
    const loadCoords = useCallback(() => {
        const Coords = localStorage.getItem("COORDS");
        if(Coords === "") {
            console.log("COORDS 가져오는 중");
            getCoords();
        } else {
            const parsedCoords = JSON.parse(Coords);
            getWeather(parsedCoords.latitude, parsedCoords.longitude);
        }
    },[]);   
    
    useEffect(() => {
        loadCoords();
    }, []);

    return (
        <WeatherContainer>
            <Location>{`@ ${weather.place}`}</Location>
            <Desc>{`${weather.temperature}°C ${weather.description}`}</Desc>
        </WeatherContainer>
    );
};

export default Weather;