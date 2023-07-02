const OPENWEATHER_URL_BASE = 'https://api.openweathermap.org/data/2.5/';
const OPENWEATHER_API_KEY = 'b80c9a1acdfd7f1d2eff581bb8ae3bb3';
// const OPENWEATHER_API_KEY = 'e03e8f80dfa8a3c1fa67347f4f876d34';

export const weatherCurrentAPI = async ({ lat, lon }) => {
  try {
    const urlCurrent = `${OPENWEATHER_URL_BASE}weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`;

    const responseCurrent = await fetch(urlCurrent);
    if (!responseCurrent.ok) {
      throw new Error(responseCurrent.statusText);
    }
    const currentWeather = await responseCurrent.json();
    if (currentWeather.length === 0) {
      throw new Error('weather for this location not found');
    }

    return currentWeather;
  } catch (err) {
    alert(err.message);
  }
};

export const weatherFutureAPI = async ({ lat, lon }) => {
  try {
    const url5Days = `${OPENWEATHER_URL_BASE}forecast?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`;

    const response = await fetch(url5Days);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const futureWeather = await response.json();
    if (futureWeather.length === 0) {
      throw new Error('weather for this location not found');
    }

    return futureWeather;
  } catch (err) {
    alert(err.message);
  }
};
