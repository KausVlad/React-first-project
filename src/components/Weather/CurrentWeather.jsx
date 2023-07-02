import { getWindDirection } from './CurrentWeatherHelpers/getWindDirection';
import { getHumanUnderstandTime } from './utils/getHumanUnderstandTime';
import { getClothingTips } from './CurrentWeatherHelpers/getClothingTips';
import { useSelector } from 'react-redux';

export default function CurrentWeather() {
  const { currentWeather } = useSelector((state) => state.weatherState);
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

  const [clothingTips, umbrellaStatus] = getClothingTips(temp, icon);

  return (
    <>
      <div className="weather-temperature-icon">
        <div>
          <p className="weather-temperature">+{Math.round(temp)}&deg;</p>
          {umbrellaStatus ? (
            <img
              className="umbrella"
              src={`/images/umbrella.png`}
              alt="umbrella"
            />
          ) : (
            <></>
          )}
          <img
            className="clothing-tips"
            src={`/images/${clothingTips}.png`}
            alt="Tips"
          />
        </div>
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
          <span className="weather-info-label">Feels like:</span>
          <span className="weather-info-value">
            {Math.round(feelsLike)}&deg;
          </span>
        </li>
        <li>
          <span className="weather-info-label">Max/Min C&deg;:</span>
          <span className="weather-info-value">
            <span className="forecast-max-temp">
              {Math.round(tempMax)}&deg;
            </span>{' '}
            <span className="forecast-min-temp">
              {Math.round(tempMin)}&deg;
            </span>
          </span>
        </li>
        <li>
          <span className="weather-info-label">Humidity:</span>
          <span className="weather-info-value">{humidity}%</span>
        </li>
        <li>
          <span className="weather-info-label">Pressure:</span>
          <span className="weather-info-value">{pressure} hPa</span>
        </li>
        <li>
          <span className="weather-info-label">Wind:</span>
          <span className="weather-info-value">
            {speed} m/s {getWindDirection(deg)}
          </span>
        </li>
        <li>
          <span className="weather-info-label">Wind dust:</span>
          <span className="weather-info-value">{gust} m/s</span>
        </li>
        <li>
          <span className="weather-info-label">Sunrise:</span>
          <span className="weather-info-value">
            {getHumanUnderstandTime(sunrise)}
          </span>
        </li>
        <li>
          <span className="weather-info-label">Sunset:</span>
          <span className="weather-info-value">
            {getHumanUnderstandTime(sunset)}
          </span>
        </li>
        <li>
          <span className="weather-info-label">Visibility:</span>
          <span className="weather-info-value">{visibility / 1000} km</span>
        </li>
      </ul>
    </>
  );
}
