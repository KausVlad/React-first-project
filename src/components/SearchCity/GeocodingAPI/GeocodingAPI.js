const OPENWEATHER_URL_BASE = 'http://api.openweathermap.org/geo/1.0/direct?q=';
export const OPENWEATHER_API_KEY = 'b80c9a1acdfd7f1d2eff581bb8ae3bb3';
//export const OPENWEATHER_API_KEY = 'e03e8f80dfa8a3c1fa67347f4f876d34';

const GeocodingAPI = async (onFetched, cityName, selectedApiKey) => {
  try {
    const url = `${OPENWEATHER_URL_BASE}${cityName}&limit=5&appid=${selectedApiKey}`;
    let response, locationData;
    if (cityName.length > 0) {
      response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      locationData = await response.json();
      if (locationData.length === 0) {
        throw new Error('Location not found');
      }
    }

    onFetched(cityName.length === 0 ? [] : locationData);
  } catch (err) {
    alert(err.message);
  }
};

export default GeocodingAPI;
