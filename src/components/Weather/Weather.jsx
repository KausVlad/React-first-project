import WeatherAPI from './WeatherAPI/WeatherAPI';
import CurrentWeather from './CurrentWeather';
import FutureWeather from './FutureWeather';
import { useState, useEffect } from 'react';
import './Weather.scss';

export default function Weather() {
  const [weatherData, setWeatherData] = useState({});
  const coordinate = {
    lat: 50.4500336,
    lon: 30.5241361,
  };

  useEffect(() => {
    WeatherAPI(setWeatherData, coordinate);
  }, []);
  console.log(weatherData[0]);
  return (
    <div className="weather">
      <div className="current-weather">
        {weatherData[0] ? (
          <CurrentWeather currentWeather={weatherData[0]} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <FutureWeather />
    </div>
  );
}
