import React, {useEffect, useState} from 'react';

const getWeather = (lat, lon) => {
    const API_KEY = "bae1076bc4c9ce19a1bd0aa7f04a7d96";
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(response => {
        return response.json();
    }).then(json => {
        const result = {
            place: json.name,
            temperature: json.main.temp,
            description: json.weather[0].main
        };
        console.log(result);
        return result;
    });
};

const saveCoords = (coordsObj) => {
    localStorage.setItem("COORDS", JSON.stringify(coordsObj));
};

const geoSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
};

const geoErr = () => {
    console.log("geolocation error");
};

const getCoords = () => {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoErr);
}; 

const Weather = () => {
    // const [weather, setWeather] = useState();

    const loadCoords = () => {
        const Coords = localStorage.getItem("COORDS");
        if(Coords === "") {
            console.log("COORDS 가져오는 중");
            getCoords();
        } else {
            const parsedCoords = JSON.parse(Coords);
            const weather = getWeather(parsedCoords.latitude, parsedCoords.longitude);
            console.log(weather);
        }
    };   

    useEffect(() => {
        loadCoords();
        // setWeather({
        //     place: loadCoords.place,
        //     temperature: loadCoords.temperature,
        //     description: loadCoords.description
        // });
        //console.log();
    }, []);

    return (
        <div>
            {/* <span>{weather.place}</span>
            <span>{weather.temperature}</span>
            <span>{weather.description}</span> */}
        </div>
    );
};

export default Weather;