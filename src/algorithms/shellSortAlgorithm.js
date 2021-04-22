const shellSortAlgorithm = (arr) => {
  let changeList = [];
  const len = arr.length;
  let gap = len / 2;
  while (gap > 0) {
    for (let x = gap; x < len; x++) {
      let y = x;
      let container = arr[x];

      while (y >= gap && arr[y - gap] > container) {
        arr[y] = arr[y - gap];
        y = y - gap;
      }
      arr[y] = container;
    }
    gap = gap / 2;
  }

  return changeList;
};

export default shellSortAlgorithm;
