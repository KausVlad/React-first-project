export function getWeakenedDay(day) {
  if (day === 'Saturday' || day === 'Sunday') {
    return 'forecast-weakened';
  } else {
    return '';
  }
}
