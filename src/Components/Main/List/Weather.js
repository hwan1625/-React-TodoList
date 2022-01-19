import React, { useState, useEffect } from 'react';
import useCurrentLocation from '../../../lib/useCurrentLocation';
import styled from 'styled-components';
import { ReactComponent as ClearD } from '../../../imgs/clear-day.svg';
import { ReactComponent as ClearN } from '../../../imgs/clear-night.svg';
import { ReactComponent as CloudD } from '../../../imgs/cloudy-day.svg';
import { ReactComponent as CloudN } from '../../../imgs/cloudy-night.svg';
import { ReactComponent as Rain } from '../../../imgs/rainy.svg';
import { ReactComponent as Snow } from '../../../imgs/snowy.svg';
import axios from 'axios';

const WeatherStyled = styled.div`
  display: flex;
  justify-content: center;
  height: 65px;
  .weather_metadata {
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: auto 0;
    height: 100%;
    .location {
      text-align: center;
      padding: 5px 10px;
    }
    .info {
      span {
        padding: 5px 5px;
      }
    }
  }
`;
const API_KEY = "b14d48cd38f756e36edae05fd8a0243b";
const weathers = [
  {
    name: "Clear",
    icon: <ClearD />,
    isDay: true
  }, {
    name: "Clear",
    icon: <ClearN />,
    isDay: false
  }, {
    name: "Clouds",
    icon: <CloudD />,
    isDay: true
  }, {
    name: "Clouds",
    icon: <CloudN />,
    isDay: false
  }, {
    name: "Rain",
    icon: <Rain />
  }, {
    name: "Snow",
    icon: <Snow />
  }
];

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
        setItems({ weather: data.weather[0].main, temperature: Math.round((data.main.temp - 273.15)) + "°C", location: data.name });
      })
      .catch(error => {
        setWeatherError(error);
      })
  }, [url]);
  return (
    <WeatherStyled>
      {weathers.map((weather, id) => {
        if (weather.isDay === isDay || weather.isDay === undefined) {
          if (weather.name === items.weather)
            return <span key={id}>{weather.icon}</span>;
        }
        return undefined;
      })}
      {items ?
        <div className="weather_metadata">
          <div className="location">
            {items.location}
          </div>
          <div className="info">
            <span>
              {items.temperature}
            </span>
            <span>
              {items.weather}
            </span>
          </div>
        </div>
        :
        undefined
      }
    </WeatherStyled>
  );
};
export default Weather;