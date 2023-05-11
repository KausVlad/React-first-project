const OPENWEATHER_URL_BASE =
  'https://api.openweathermap.org/data/2.5/forecast?';
const OPENWEATHER_API_KEY = 'b80c9a1acdfd7f1d2eff581bb8ae3bb3';

const WeatherAPI = async (onFetched, { lat, lon }) => {
  const url = `${OPENWEATHER_URL_BASE}lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}`;
  const response = await fetch(url);
  const locationWeather = await response.json();

  onFetched(locationWeather);
};

export default WeatherAPI;
