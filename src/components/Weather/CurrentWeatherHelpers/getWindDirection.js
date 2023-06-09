export const getWindDirection = (deg) => {
  const directions = [
    [0, 22.5, '↑'],
    [22.5, 67.5, '↗'],
    [67.5, 112.5, '→'],
    [112.5, 157.5, '↘'],
    [157.5, 202.5, '↓'],
    [202.5, 247.5, '↙'],
    [247.5, 292.5, '←'],
    [292.5, 337.5, '↖'],
    [337.5, 360, '↑'],
  ];

  for (const [start, end, direction] of directions) {
    if (deg >= start && deg < end) {
      return direction;
    }
  }

  return '↺';
};
