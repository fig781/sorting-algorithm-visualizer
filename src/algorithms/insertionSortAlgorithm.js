// changeList.push({ index: i, value: arr[i], color: '#6ee7b7' });
// changeList.push({ index: i, value: arr[i], color: '#ec4899' });
// changeList.push({index: i, value: arr[i], color: '#a78bfa',});

const insertionSortAlgorithm = (arr) => {
  let changeList = [];
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    changeList.push({ index: i, value: arr[i], color: '#6ee7b7' });
    let current = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];

      changeList.push({ index: j + 1, value: arr[j + 1], color: '#ec4899' });
      changeList.push({ index: j + 1, value: arr[j + 1], color: null });
    }
    arr[j + 1] = current;
    changeList.push({ index: j + 1, value: arr[j + 1], color: '#6ee7b7' });
    changeList.push({ index: j + 1, value: arr[j + 1], color: null });
  }
  return changeList;
};

export default insertionSortAlgorithm;
