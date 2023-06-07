export function getDayForecastSegment(allForecast, day, modifier) {
  const startIndex = day * 8 - modifier;
  const endIndex = startIndex + 8;

  return allForecast.slice(day === 0 ? 0 : startIndex, endIndex);
}
