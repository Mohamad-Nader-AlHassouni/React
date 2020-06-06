import React, { useState } from "react";
import "./App.css";
import WeatherCard from "./component/WeatherCard";
import Button from "./component/Button";
import Input from "./component/Input"


const App = () => {
  const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  const [cityName, setCityName] = useState('');
  const [citiesData, setCitiesData] = useState([]);
  const [error, setError] = useState(false)
  const [isLoading,setIsLoading] = useState(false)
  const getCityWeather = () => {
    setIsLoading(true)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
    fetch(url)
    .then(res => res.json())
    .then(data =>{
      if(data.cod === '400' ||data.cod === '404'){
        setError(true)
        setIsLoading(false);
      }else{
        setCitiesData([...citiesData, data]);
        setError(false)
        setIsLoading(false);
      }
    })
    .catch(error =>{ 
      setError(true)
      setIsLoading(false) 
    })
  }
  const onChangeInput = (val)=> {
    setCityName(val)
  }

  const removeCity = (id) => {
    const filteredCities = citiesData.filter(city=> city.id !== id)
    setCitiesData(filteredCities)
  }
  
  

    return (
    <div className="App">
      <h1>Weather</h1>
      <Input onChange={onChangeInput} val={cityName}></Input>
      <Button class="searchButton" onClick={getCityWeather}>Search</Button>
      {isLoading && !error ? <p>Loading ...</p>: null}
      <div className="container">
      {!isLoading && citiesData && !error ?
      citiesData.map(city =>{
        return (
          <WeatherCard key={city.id} removeCity={removeCity} data={city}/>
        )
      })
        :  null}
        </div>
       {citiesData.length === 0 &&  <p>write a city name</p>}
      {error && <p className="errorMessage">Please enter a valid city name!</p>}
    </div>
    )
}

export default App;
