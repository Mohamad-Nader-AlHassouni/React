import React, { useState, useEffect } from "react";
import "./CityCharts.css";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Button from "./Button";

const CityCharts = (props) => {
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?id=${props.match.params.cityId}&units=metric&appid=${apiKey}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === "400" || data.cod === "404") {
          setError(true);
          setIsLoading(false);
        } else {
          setForecast(data);
          setCity({ name: data.city.name, country: data.city.country });
          setError(false);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setError(true);
        setIsLoading(false);
      });
  }, [url]);

  return (
    <div>
      {isLoading && !error ? <p>Loading ...</p> : null}
      {error && <p>Please enter a valid city name!</p>}
      {!isLoading && forecast.length !== 0 && !error && (
          <div className="forcast">
          <h1>5 Day Forecast</h1>
          <h3>
            {city.name}, {city.country}
          </h3>
          <ResponsiveContainer className="recharts-wrapper" width='70%' height={400}>
          <AreaChart
            // width={window.innerWidth / 1.5}
            // height={window.innerHeight / 2}
            data={forecast.list}
            margin={{ top: 40, right: 0, left: 0, bottom: 40 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dt_txt" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="main.temp"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
          </ResponsiveContainer>
          <Button class="backButton" onClick={()=>{props.history.push('/')}}>Go Back!</Button>
        </div>
      )}
    </div>
  );
};

export default CityCharts;
