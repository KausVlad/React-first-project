const OPENWEATHER_URL_BASE = 'https://api.openweathermap.org/data/2.5/';

export const weatherCurrentAPI = async ({ lat, lon }, selectedApiKey) => {
  try {
    const urlCurrent = `${OPENWEATHER_URL_BASE}weather?lat=${lat}&lon=${lon}&appid=${selectedApiKey}&units=metric`;

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

export const weatherFutureAPI = async ({ lat, lon }, selectedApiKey) => {
  try {
    const url5Days = `${OPENWEATHER_URL_BASE}forecast?lat=${lat}&lon=${lon}&appid=${selectedApiKey}&units=metric`;

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
