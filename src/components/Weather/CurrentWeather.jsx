export default function CurrentWeather({ currentWeather }) {
  const getWindDirection = (deg) => {
    const directions = {
      N: [0, 22.5],
      NNE: [22.5, 67.5],
      E: [67.5, 112.5],
      ESE: [112.5, 157.5],
      S: [157.5, 202.5],
      SSW: [202.5, 247.5],
      W: [247.5, 292.5],
      NW: [292.5, 337.5],
      // eslint-disable-next-line no-dupe-keys
      N: [337.5, 360],
    };

    for (const direction in directions) {
      const [start, end] = directions[direction];
      if (deg >= start && deg < end) {
        return direction;
      }
    }

    return 'Unknown';
  };

  return (
    <div className="current-weather">
      <div className="weather-temperature-icon">
        <p>+{Math.round(currentWeather.main.temp)}&deg;</p>
        <img
          src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
          alt="weather icon"
        />
      </div>
      <div className="weather-description">
        Weather {currentWeather.name}:{' '}
        {currentWeather.weather[0].description.charAt(0).toUpperCase() +
          currentWeather.weather[0].description.slice(1)}
      </div>
      <ul className="weather-info">
        <li>
          <span>Feels like:</span>
          <span>{Math.round(currentWeather.main.feels_like)}&deg;</span>
        </li>
        <li>
          <span>Min/Max temperature:</span>
          <span>
            {Math.round(currentWeather.main.temp_min)}&deg; /{' '}
            {Math.round(currentWeather.main.temp_max)}
            &deg;
          </span>
        </li>
        <li>
          <span>Humidity:</span>
          <span>{currentWeather.main.humidity}%</span>
        </li>
        <li>
          <span>Pressure:</span>
          <span>{currentWeather.main.pressure} hPa</span>
        </li>
        <li>
          <span>Wind:</span>
          <span>
            {currentWeather.wind.speed} m/s{' '}
            {getWindDirection(currentWeather.wind.deg)}
          </span>
        </li>
        <li>
          <span>Wind dust:</span>
          <span>{currentWeather.wind.gust} m/s</span>
        </li>
        <li>
          <span>Sunrise:</span>
          <span>
            {new Date(currentWeather.sys.sunrise * 1000).toLocaleTimeString()}
          </span>
        </li>
        <li>
          <span>Sunset:</span>
          <span>
            {new Date(currentWeather.sys.sunset * 1000).toLocaleTimeString()}
          </span>
        </li>
        <li>
          <span>Visibility:</span>
          <span>{currentWeather.visibility / 1000} km</span>
        </li>
      </ul>
    </div>
  );
}
