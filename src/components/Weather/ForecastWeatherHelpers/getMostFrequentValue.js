export function getMostFrequentValue(array) {
  const result = array.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }
    return acc;
  }, {});

  const mostFrequentValue = Object.keys(result).reduce((a, b) =>
    result[a] > result[b] ? a : b
  );
  return mostFrequentValue;
}
