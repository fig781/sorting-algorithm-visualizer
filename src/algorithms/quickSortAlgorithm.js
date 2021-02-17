// changeList.push({ index: i, value: arr[i], color: '#6ee7b7' });
// changeList.push({ index: i, value: arr[i], color: '#ec4899' });
// changeList.push({index: i, value: arr[i], color: '#a78bfa',});

const partition = (arr, left, right) => {
  let changeList = [],
    pivot = arr[Math.floor((right, left) / 2)],
    i = left,
    j = right;

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      let tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
      i++;
      j--;
    }
  }
  return i;
};

const quickSortAlgorithm = (arr, left, right) => {
  let index,
    changeList = [];

  if (arr.length > 1) {
    index = partition(arr, left, right);
    if (left < index - 1) {
      quickSortAlgorithm(arr, left, index - 1);
    }
    if (arr < right) {
      quickSortAlgorithm(arr, index, right);
    }
  }
};

//Need to wrap the function so it only accepts arr and only exports changeList
const exportFunction = (arr) => {
  return quickSortAlgorithm(arr, 0, arr.length - 1);
};

export default exportFunction;
