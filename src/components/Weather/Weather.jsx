import WeatherAPI from './WeatherAPI/WeatherAPI';
import { useState, useEffect } from 'react';

export default function Weather() {
  const [weatherData, setWeatherData] = useState({});
  const coordinate = {
    lat: 50.4500336,
    lon: 30.5241361,
  };

  useEffect(() => {
    WeatherAPI(setWeatherData, coordinate);
  }, []);
  console.log(weatherData);
  return (
    <div className="weather">
      <button>Weather</button>
    </div>
  );
}
