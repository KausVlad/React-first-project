import { useState } from 'react';
import { getWindDirection } from './CurrentWeatherHelpers/getWindDirection';
import { getForecastModifier } from './ForecastWeatherHelpers/getForecastModifier';
import { getDayForecastSegment } from './ForecastWeatherHelpers/getDayForecastSegment';
import { getDailyForecast } from './ForecastWeatherHelpers/getDailyForecast';

export default function ForecastWeather({ forecastWeather: { list } }) {
  // console.log(list);

  const [forecastDay, setForecastDay] = useState(0);

  const forecastModifier = getForecastModifier(list); //!є баг при 0 год початку при значенні мод 8

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
              <p>{day.dayName}</p>
              <p>
                {day.day}:{day.month}
              </p>
              <img
                src={`http://openweathermap.org/img/wn/${day.icon}d@2x.png`}
              />
              <p>{day.maxTemp}&deg;C</p>
              <p>{day.minTemp}&deg;C</p>
              <p>{day.main}</p>
              <p>{day.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="forecast-hourly">
        <ul>
          {getDayForecastSegment(list, forecastDay, forecastModifier).map(
            (hour) => (
              <li key={hour.dt}>
                <p>
                  {new Date(hour.dt * 1000).toLocaleTimeString('en-uk', {
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZone: 'UTC',
                  })}
                </p>
                <p>{Math.round(hour.main.temp)}&deg;</p>
                <img
                  src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
                />
                <p>
                  {hour.rain || hour.snow
                    ? `${hour.rain['3h'] || hour.snow['3h']} mm`
                    : 'dry'}
                </p>
                <p>
                  {hour.wind.speed} m/s {getWindDirection(hour.wind.deg)}
                </p>
                <p>{hour.main.pressure} hPa</p>
                <p>{hour.main.humidity}%</p>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
}
