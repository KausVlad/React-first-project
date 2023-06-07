export default function ForecastWeather({ forecastWeather: { list } }) {
  function getForecastModifier(allForecast) {
    for (const [key, { dt }] of allForecast.entries()) {
      const hours = new Date(dt * 1000).getUTCHours();
      if (hours === 0) return key;
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
          month: time.getUTCMonth() + 1,
          day: time.getUTCDate(),
          dayName: daysOfWeek[time.getUTCDay()],
          maxTemp: Math.round(Math.max(...rawWeather.temp)),
          minTemp: Math.round(Math.min(...rawWeather.temp)),
          main: general[0],
          description: general[1],
          icon: general[2],
        };
        convertedDailyForecast.push(convertedWeatherData);
      } else {
        break;
      }
    }
    return convertedDailyForecast;
  }

  console.log(getDailyForecast(list));

  return (
    <>
      <div className="forecast-calendar">
        <ul>
          <li>day 1</li>
        </ul>
      </div>
      <div className="forecast-hourly">4564</div>
    </>
  );
}
