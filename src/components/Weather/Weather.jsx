import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';
import { useEffect } from 'react';
import './Weather.scss';
import {
  setCurrentWeather,
  setForecastWeather,
} from '../../store/weatherState/weatherState.slice';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingSpinner } from './Loader';
import { weatherCurrentAPI, weatherFutureAPI } from './WeatherAPI/WeatherAPI';
import { checkCoordinates } from './utils/checkCoordinates';
import { checkAuth } from '../../store/auth/auth.actions';
import { NavLink } from 'react-router-dom';

export default function Weather() {
  const dispatch = useDispatch();

  const { coordinate, currentWeather, forecastWeather } = useSelector(
    (state) => state.weatherState
  );
  const { isAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuth) {
      dispatch(checkAuth());
    }
  }, [dispatch, isAuth]);

  useEffect(() => {
    const fetchData = async () => {
      const weatherCurrent = await weatherCurrentAPI(
        checkCoordinates(coordinate)
      );
      dispatch(setCurrentWeather(weatherCurrent));
    };
    fetchData();
  }, [coordinate, dispatch]);

  useEffect(() => {
    if (isAuth) {
      const fetchData = async () => {
        const weatherFuture = await weatherFutureAPI(
          checkCoordinates(coordinate)
        );
        dispatch(setForecastWeather(weatherFuture));
      };
      fetchData();
    } else {
      dispatch(setForecastWeather(null));
    }
  }, [coordinate, dispatch, isAuth]);

  return (
    <div className="weather">
      <div className="current-weather">
        {currentWeather ? <CurrentWeather /> : <LoadingSpinner />}
      </div>
      <div className="forecast-weather">
        {forecastWeather ? (
          <ForecastWeather />
        ) : isAuth ? (
          <LoadingSpinner />
        ) : (
          <div className="login-reminder">
            <NavLink to="/login">
              Log in if you want to see the full weather forecast
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
