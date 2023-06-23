import WeatherAPI from './WeatherAPI/WeatherAPI';
import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';
import { useEffect } from 'react';
import './Weather.scss';
import { setWeather } from '../../store/weatherState/weatherState.slice';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingSpinner } from './Loader';

export default function Weather() {
  const dispatch = useDispatch();

  const { coordinate, currentWeather, forecastWeather } = useSelector(
    (state) => state.weatherState
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await WeatherAPI(
        Object.keys(coordinate).length === 0
          ? {
              lat: 50.4500336,
              lon: 30.5241361,
            }
          : coordinate
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
          <LoadingSpinner />
        )}
      </div>
      <div className="forecast-weather">
        {forecastWeather ? (
          <ForecastWeather forecastWeather={forecastWeather} />
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
}
