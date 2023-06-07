export function getHumanUnderstandTime(s) {
  return new Date(s * 1000).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
}
