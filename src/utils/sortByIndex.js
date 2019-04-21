export default function createSorter(key) {
  return (x, y) => {
    if (x.sortIndexes[key] < y.sortIndexes[key]) {
      return -1;
    }
    if (x.sortIndexes[key] > y.sortIndexes[key]) {
      return 1;
    }
    return 0;
  };
}
