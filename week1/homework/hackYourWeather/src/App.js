import React, { Component } from "react";
import "./App.css";
import WeatherCard from "./component/WeatherCard";

const data = require("./city-weather.json");

class App extends Component {
  render() {

    return (
    <div className="App">
      <h1>Weather</h1>
    {data.map(city=> {
      return(
        <WeatherCard
        key={city.id}
        cityName={city.name}
        countryName={city.sys.country}
        weatherMain={city.weather[0].main}
        weatherDescription={city.weather[0].description}
        maxTemp={city.main.temp_max}
        minTemp={city.main.temp_min}
        lon={city.coord.lon}
        lat={city.coord.lat}
        />
      )
    })}
    </div>
    )
  }
}

export default App;
