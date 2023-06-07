import { useState } from 'react';

export default function ForecastWeather({ forecastWeather: { list } }) {
  // console.log(list);

  const [forecastDay, setForecastDay] = useState(0);

  function getForecastModifier(allForecast) {
    for (const [key, { dt }] of allForecast.entries()) {
      const hours = new Date(dt * 1000).getUTCHours();
      if (hours === 0) return 8 - key;
    }
  }
  const forecastModifier = getForecastModifier(list);

  function getDayForecastSegment(allForecast, day, modifier) {
    const startIndex = day * 8 - modifier;
    const endIndex = startIndex + 8;

    return allForecast.slice(day === 0 ? 0 : startIndex, endIndex);
  }

  function getMostFrequentValue(array) {
    const result = array.reduce((acc, curr) => {
      if (!acc[curr]) {
        acc[curr] = 1;
      } else {
        acc[curr]++;
      }
      return acc;
    }, {});

    const mostFrequentValue = Object.keys(result).reduce((a, b) =>
      result[a] > result[b] ? a : b
    );
    return mostFrequentValue;
  }

  function getDailyForecast(array) {
    const convertedDailyForecast = [];
    for (let i = 0; i < 10; i++) {
      const dayForecastSegment = getDayForecastSegment(
        array,
        i,
        forecastModifier
      );
      if (dayForecastSegment.length) {
        const time = new Date(dayForecastSegment[0].dt * 1000);
        const daysOfWeek = [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ];
        const rawWeather = {
          temp: [],
          general: [],
          id: 0,
        };

        for (const iterator of dayForecastSegment) {
          rawWeather.temp.push(iterator.main.temp);
          rawWeather.general.push(
            `${iterator.weather[0].main}@${
              iterator.weather[0].description
            }@${iterator.weather[0].icon.slice(0, 2)}`
          );
        }

        const general = getMostFrequentValue(rawWeather.general).split('@');

        const convertedWeatherData = {
          month: (time.getUTCMonth() + 1).toString().padStart(2, '0'),
          day: time.getUTCDate().toString().padStart(2, '0'),
          dayName: daysOfWeek[time.getUTCDay()],
          maxTemp: Math.round(Math.max(...rawWeather.temp)),
          minTemp: Math.round(Math.min(...rawWeather.temp)),
          main: general[0],
          description: general[1],
          icon: general[2],
          id: i,
        };

        convertedDailyForecast.push(convertedWeatherData);
      } else {
        break;
      }
    }
    return convertedDailyForecast;
  }

  console.log(getDayForecastSegment(list, forecastDay, forecastModifier));

  return (
    <>
      <div className="forecast-calendar">
        <ul>
          {getDailyForecast(list).map((day) => (
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
                  {hour.wind.speed} m/s {hour.wind.deg}
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
