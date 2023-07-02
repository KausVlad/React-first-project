export const checkCoordinates = (coordinate) => {
  return Object.keys(coordinate).length === 0
    ? {
        lat: 50.4500336,
        lon: 30.5241361,
      }
    : coordinate;
};
