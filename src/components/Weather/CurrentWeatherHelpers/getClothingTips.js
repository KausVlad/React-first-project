export function getClothingTips(temp, icon) {
  const temperatureCondition = [
    { minTemp: 20, clothes: '1' },
    { minTemp: 15, clothes: '2' },
    { minTemp: 5, clothes: '3' },
    { minTemp: -5, clothes: '4' },
    { minTemp: Number.NEGATIVE_INFINITY, clothes: '5' },
  ];
  const weatherCondition = ['09', '10', '11', '13'];
  return [
    temperatureCondition.find((item) => item.minTemp <= temp).clothes,
    weatherCondition.includes(icon.slice(0, 2)),
  ];
}
