export function getForecastModifier(allForecast) {
  for (const [key, { dt }] of allForecast.entries()) {
    const hours = new Date(dt * 1000).getUTCHours();
    if (hours === 0) return 8 - key === 8 ? 0 : 0 - key; //!костиль поправ це (8 - key === 8 ? 0 : 0 - key)
  }
}
