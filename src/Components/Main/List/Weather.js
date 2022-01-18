import React, { useState, useEffect } from 'react';
import useCurrentLocation from '../../../lib/useCurrentLocation';
import styled from 'styled-components';
import { ReactComponent as Day } from '../../../imgs/day.svg';
import { ReactComponent as Night } from '../../../imgs/night.svg';
import axios from 'axios';

const WeatherStyled = styled.div`

`;
const API_KEY = "b14d48cd38f756e36edae05fd8a0243b";

const Weather = ({ isDay }) => {
  const { location, error } = useCurrentLocation({ timeout: 1000 * 60 * 1 });
  const [items, setItems] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [weatherError, setWeatherError] = useState({});
  const url = location && `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}`;
  useEffect(() => {
    setIsLoaded(true);
    axios.get(url)
      .then(response => {
        const data = response.data;
        setItems({ weather: data.weather[0].main, temperature: Math.round((data.main.temp - 273.15)), location: data.name });
      })
      .catch(error => {
        setWeatherError(error);
      })
  }, [url]);
  return (
    <WeatherStyled>

      <div className="weather_metadata">
        <div className="location">
          {items && items.location}
        </div>
        <div className="info">
          <span>
            {items && items.temperature}°C
          </span>
          <span>
            {items && items.weather}
          </span>
        </div>
      </div>
    </WeatherStyled>
  );
};
export default Weather;