const OPENWEATHER_URL_BASE = 'http://api.openweathermap.org/geo/1.0/direct?q=';
const OPENWEATHER_API_KEY = 'b80c9a1acdfd7f1d2eff581bb8ae3bb3';

const GeocodingAPI = async (onFetched, cityName) => {
  const url = `${OPENWEATHER_URL_BASE}${cityName}&limit=5&appid=${OPENWEATHER_API_KEY}`;
  if (cityName === 'київ') {
    //.length > 0
    const response = await fetch(url);
    const locationData = await response.json();

    onFetched(cityName.length === 0 ? [] : locationData);
  }
};

export default GeocodingAPI;
