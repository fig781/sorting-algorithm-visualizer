const selectionSortAlgorithm = (arr) => {
  let changeList = [];
  const len = arr.length;
  for (let x = 0; x < len - 1; x++) {
    changeList.push({ index: x, value: arr[x], color: '#6ee7b7' });
    let min = x; //min holds the current minimum number position for each pass; x holds the Initial min number
    for (let y = x + 1; y < len; y++) {
      changeList.push({ index: y, value: arr[y], color: '#ec4899' });
      changeList.push({ index: y, value: arr[y], color: null });
      if (arr[y] < arr[min]) {
        if (min !== x) {
          changeList.push({ index: min, value: arr[min], color: null });
        }
        changeList.push({ index: y, value: arr[y], color: '#6ee7b7' });
        min = y;
      }
    }
    if (min !== x) {
      let tmp = arr[x];
      arr[x] = arr[min];
      arr[min] = tmp;
    }
    changeList.push({ index: min, value: arr[min], color: null });
    changeList.push({ index: x, value: arr[x], color: '#a78bfa' });
  }
  return changeList;
};

export default selectionSortAlgorithm;
