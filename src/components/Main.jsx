import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import Content from "./Content";
import WeatherSearch from "./WeatherSearch";
import WeatherData from "./WeatherData";
import DateTime from "./DateTime";
// context
import { Context } from "../Context";

const Main = () => {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [error, setError] = useState();

  const api_call = async (e) => {
    e.preventDefault();
    const cityName = e.target.elements.cityName.value;
    if (!cityName) {
      setWeather("");
      setError("Please insert a valid city name!");
      return;
    }
    const API_KEY = "4f56358b0e70cd0d6e126b71a64cc4ca";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    try {
      const res = await axios.get(url);
      setWeather(res.data.main);
      setCity(res.data.name);
      setError("");
      weather && console.log(weather);
    } catch (err) {
      console.error(err);
      setWeather("");
      setError("Please insert a valid city name!");
    }
  };

  return (
    <div className="main">
      <Header />
      <Content>
        <DateTime />
        <h1 className="error">Insert a valid city name</h1>
        <Context.Provider value={{ weather, api_call, city }}>
          <WeatherSearch />
          {error && <div className="error">{error}</div>}
          {weather && <WeatherData />}
        </Context.Provider>
      </Content>
    </div>
  );
};

export default Main;
