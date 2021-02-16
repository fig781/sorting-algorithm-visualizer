// changeList.push({ index: i, value: arr[i], color: '#6ee7b7' });
// changeList.push({ index: i, value: arr[i], color: '#ec4899' });
// changeList.push({index: i, value: arr[i], color: '#a78bfa',});

const insertionSortAlgorithm = (arr) => {
  let changeList = [];
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    changeList.push({ index: i, value: arr[i], color: '#ec4899' });
    let current = arr[i];
    let j = i - 1;
    changeList.push({ index: j, value: arr[j], color: '#6ee7b7' });
    while (j >= 0 && current < arr[j]) {
      let tmp = arr[j];
      arr[j + 1] = arr[j];
      arr[j] = tmp;
      j--;
    }
    arr[j + 1] = current;
  }
  return changeList;
};

export default insertionSortAlgorithm;
