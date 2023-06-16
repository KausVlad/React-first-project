const OPENWEATHER_URL_BASE = 'https://api.openweathermap.org/data/2.5/';
const OPENWEATHER_API_KEY = 'b80c9a1acdfd7f1d2eff581bb8ae3bb3';
// const OPENWEATHER_API_KEY = 'e03e8f80dfa8a3c1fa67347f4f876d34';

const WeatherAPI = async ({ lat, lon }) => {
  const url5Days = `${OPENWEATHER_URL_BASE}forecast?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`;

  const response = await fetch(url5Days);
  const futureWeather = await response.json();

  const urlCurrent = `${OPENWEATHER_URL_BASE}weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`;

  const responseCurrent = await fetch(urlCurrent);
  const currentWeather = await responseCurrent.json();

  const locationWeather = [currentWeather, futureWeather];

  return locationWeather;
};

export default WeatherAPI;
