import { getDayForecastSegment } from './getDayForecastSegment';
import { getMostFrequentValue } from './getMostFrequentValue';

export function getDailyForecast(array, forecastModifier) {
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
