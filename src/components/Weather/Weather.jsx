import WeatherAPI from './WeatherAPI/WeatherAPI';
import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';
import { useEffect } from 'react';
import './Weather.scss';
import { setWeather } from '../../store/weatherState/weatherState.slice';
import { useDispatch, useSelector } from 'react-redux';

export default function Weather() {
  const dispatch = useDispatch();

  const { coordinate, currentWeather, forecastWeather } = useSelector(
    (state) => state.weatherState
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await WeatherAPI(
        coordinate || {
          lat: 50.4500336,
          lon: 30.5241361,
        }
      );
      dispatch(setWeather(data));
    };
    fetchData();
  }, [coordinate, dispatch]);

  return (
    <div className="weather">
      <div className="current-weather">
        {currentWeather ? (
          <CurrentWeather currentWeather={currentWeather} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="forecast-weather">
        {forecastWeather ? (
          <ForecastWeather forecastWeather={forecastWeather} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
