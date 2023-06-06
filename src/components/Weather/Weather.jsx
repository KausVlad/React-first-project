import WeatherAPI from './WeatherAPI/WeatherAPI';
import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';
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
  return (
    <div className="weather">
      <div className="current-weather">
        {weatherData[0] ? (
          <CurrentWeather currentWeather={weatherData[0]} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="forecast-weather">
        {weatherData[1] ? (
          <ForecastWeather forecastWeather={weatherData[1]} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
