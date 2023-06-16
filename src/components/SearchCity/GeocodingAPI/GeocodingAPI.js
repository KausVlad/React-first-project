const OPENWEATHER_URL_BASE = 'http://api.openweathermap.org/geo/1.0/direct?q=';
const OPENWEATHER_API_KEY = 'b80c9a1acdfd7f1d2eff581bb8ae3bb3';
// const OPENWEATHER_API_KEY = 'e03e8f80dfa8a3c1fa67347f4f876d34';

const GeocodingAPI = async (onFetched, cityName) => {
  const url = `${OPENWEATHER_URL_BASE}${cityName}&limit=5&appid=${OPENWEATHER_API_KEY}`;
  let response, locationData;
  if (cityName.length > 0) {
    response = await fetch(url);
    locationData = await response.json();
  }

  onFetched(cityName.length === 0 ? [] : locationData);
};

export default GeocodingAPI;
