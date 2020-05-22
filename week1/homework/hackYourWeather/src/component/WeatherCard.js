import React from 'react';
import "./Weathercard.css";

const WeatherCard = (props) => {
    console.log(props);
    
    return(
<div className='card'>
    <h1>{props.cityName}, {props.countryName}</h1>
    <h3>{props.weatherMain}</h3>
    <p>{props.weatherDescription}</p>
    <p>min temp: {props.minTemp}</p>
    <p>max temp: {props.maxTemp}</p>
    <p>location: {props.lon},{props.lat}</p>
</div>
    )
}

export default WeatherCard;