import React from "react";
import "./WeatherCard.css";
import Button from "./Button";
import { Link } from "react-router-dom";

const WeatherCard = (props) => {
  return (
    <div className="card">
      <div className="closeCard">
        <Button
          class="closeButton"
          onClick={() => props.removeCity(props.data.id)}
        >
          X
        </Button>
      </div>
      <div>
        <Link to={`/${props.data.id}`}>
          <h2>
            {props.data.name}, {props.data.sys.country}
          </h2>
        </Link>
        <h3>{props.data.weather[0].main}</h3>
        <p>{props.data.weather[0].description}</p>
        <p>min temp: {props.data.main.temp_min}</p>
        <p>max temp: {props.data.main.temp_max}</p>
        <p>
          location: {props.data.coord.lon},{props.data.coord.lat}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
