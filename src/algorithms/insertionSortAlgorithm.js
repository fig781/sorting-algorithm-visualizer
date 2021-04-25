const insertionSortAlgorithm = (arr) => {
  let changeList = [];
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    let current = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];

      if (j + 1 === i) {
        changeList.push({ index: j + 1, value: arr[j + 1], color: '#6ee7b7' });
      } else {
        changeList.push({ index: j + 1, value: arr[j + 1], color: '#ec4899' });
        changeList.push({ index: j + 1, value: arr[j + 1], color: null });
      }
    }
    arr[j + 1] = current;

    changeList.push({ index: j + 1, value: arr[j + 1], color: '#6ee7b7' });
    changeList.push({ index: j + 1, value: arr[j + 1], color: null });
    changeList.push({ index: i, value: arr[i], color: null });
  }
  for (let x = arr.length - 1; x >= 0; x--) {
    changeList.push({ index: x, value: arr[x], color: '#a78bfa' });
  }
  return changeList;
};

export default insertionSortAlgorithm;
