import React, { useContext } from "react";
// context
import { Context } from "../Context";

const WeatherSearch = () => {
  const { api_call } = useContext(Context);

  return (
    <div className="weather-search">
      <form className="weather-search__form" onSubmit={api_call}>
        <input
          autoComplete="off"
          className="weather-search__input"
          type="text"
          name="cityName"
        />
        <div className="weather-search__submit">
          <button className="weather-search__button">&rarr;</button>
        </div>
      </form>
    </div>
  );
};

export default WeatherSearch;
