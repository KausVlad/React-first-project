import { getWindDirection } from './utils/getWindDirection';
import { getHumanUnderstandTime } from './utils/getHumanUnderstandTime';

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
