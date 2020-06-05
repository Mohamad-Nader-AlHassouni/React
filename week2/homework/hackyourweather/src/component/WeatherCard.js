import React from 'react';
import "./Weathercard.css";

const WeatherCard = (props) => {
    console.log(props)
    return(
<div className='card'>
    {Object.keys(props.data).length > 0 ?
    (<div>
    <h2>{props.data.name}, {props.data.sys.country}</h2>
    <h3>{props.data.weather[0].main}</h3>
    <p>{props.data.weather[0].description}</p>
    <p>min temp: {props.data.main.temp_min}</p>
    <p>max temp: {props.data.main.temp_max}</p>
    <p>location: {props.data.coord.lon},{props.data.coord.lat}</p> 
    </div>):
    <div>write a city name</div>
}
</div>
    )
}

export default WeatherCard;