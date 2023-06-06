export default function CurrentWeather({ currentWeather }) {
  const {
    weather: [{ description, icon }],
    main: {
      temp,
      feels_like: feelsLike,
      temp_min: tempMin,
      temp_max: tempMax,
      humidity,
      pressure,
    },
    wind: { speed, gust, deg },
    sys: { sunrise, sunset },
    visibility,
    name,
  } = currentWeather;

  const getWindDirection = (deg) => {
    const directions = [
      [0, 22.5, '↑'],
      [22.5, 67.5, '↗'],
      [67.5, 112.5, '→'],
      [112.5, 157.5, '↘'],
      [157.5, 202.5, '↓'],
      [202.5, 247.5, '↙'],
      [247.5, 292.5, '←'],
      [292.5, 337.5, '↖'],
      [337.5, 360, '↑'],
    ];

    for (const [start, end, direction] of directions) {
      if (deg >= start && deg < end) {
        return direction;
      }
    }

    return '↺';
  };

  function getHumanUnderstandTime(s) {
    return new Date(s * 1000).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  return (
    <>
      <div className="weather-temperature-icon">
        <p>+{Math.round(temp)}&deg;</p>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather icon"
        />
      </div>
      <div className="weather-description">
        Weather {name}:{' '}
        {description.charAt(0).toUpperCase() + description.slice(1)}
      </div>
      <ul className="weather-info">
        <li>
          <span>Feels like:</span>
          <span>{Math.round(feelsLike)}&deg;</span>
        </li>
        <li>
          <span>Min/Max temperature:</span>
          <span>
            {Math.round(tempMin)}&deg; / {Math.round(tempMax)}&deg;
          </span>
        </li>
        <li>
          <span>Humidity:</span>
          <span>{humidity}%</span>
        </li>
        <li>
          <span>Pressure:</span>
          <span>{pressure} hPa</span>
        </li>
        <li>
          <span>Wind:</span>
          <span>
            {speed} m/s {getWindDirection(deg)}
          </span>
        </li>
        <li>
          <span>Wind dust:</span>
          <span>{gust} m/s</span>
        </li>
        <li>
          <span>Sunrise:</span>
          <span>{getHumanUnderstandTime(sunrise)}</span>
        </li>
        <li>
          <span>Sunset:</span>
          <span>{getHumanUnderstandTime(sunset)}</span>
        </li>
        <li>
          <span>Visibility:</span>
          <span>{visibility / 1000} km</span>
        </li>
      </ul>
    </>
  );
}
