import { useState } from 'react';
import { getWindDirection } from './CurrentWeatherHelpers/getWindDirection';
import { getForecastModifier } from './ForecastWeatherHelpers/getForecastModifier';
import { getDayForecastSegment } from './ForecastWeatherHelpers/getDayForecastSegment';
import { getDailyForecast } from './ForecastWeatherHelpers/getDailyForecast';
import { getWeakenedDay } from './ForecastWeatherHelpers/getWeakenedDay';
import { useSelector } from 'react-redux';

export default function ForecastWeather() {
  const {
    forecastWeather: { list },
  } = useSelector((state) => state.weatherState);

  const [forecastDay, setForecastDay] = useState(0);

  const forecastModifier = getForecastModifier(list);

  return (
    <>
      <div className="forecast-calendar">
        <ul>
          {getDailyForecast(list, forecastModifier).map((day) => (
            <li
              key={day.id}
              className={`${day.id === forecastDay ? 'active-day' : ''}`}
              onClick={() => setForecastDay(day.id)}
            >
              <p className={`forecast-day ${getWeakenedDay(day.dayName[0])}`}>
                <span className="forecast-day-full">{day.dayName[0]}</span>
                <span className="forecast-day-short">{day.dayName[1]}</span>
              </p>
              <p className={`forecast-date ${getWeakenedDay(day.dayName[0])}`}>
                {day.day}:{day.month}
              </p>
              <img
                className="forecast-icon"
                src={`http://openweathermap.org/img/wn/${day.icon}d@2x.png`}
              />
              <p className="forecast-temp">
                <span className="forecast-max-temp">{day.maxTemp}&deg;</span>{' '}
                <span className="forecast-min-temp">{day.minTemp}&deg;</span>
              </p>
              <p className="forecast-main">{day.main}</p>
              <p className="forecast-description">{day.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="forecast-hourly">
        <ul>
          {getDayForecastSegment(list, forecastDay, forecastModifier).map(
            (hour) => (
              <li key={hour.dt}>
                <div className="forecast-hourly-upper">
                  <p>
                    {new Date(hour.dt * 1000).toLocaleTimeString('en-uk', {
                      hour: '2-digit',
                      minute: '2-digit',
                      timeZone: 'UTC',
                    })}
                  </p>
                  <p className="forecast-temp-hour">
                    {Math.round(hour.main.temp)}&deg;
                  </p>
                  <img
                    src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                  />
                </div>
                <div className="forecast-hourly-bottom">
                  <p>{getWindDirection(hour.wind.deg)}</p>
                  <p>{hour.wind.speed} m/s</p>
                  <p>
                    {hour.rain || hour.snow
                      ? `${hour.rain['3h'] || hour.snow['3h']} mm`
                      : 'dry'}
                  </p>
                  <p>{hour.main.humidity}%</p>
                  <p>{hour.main.pressure} hPa</p>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
}
