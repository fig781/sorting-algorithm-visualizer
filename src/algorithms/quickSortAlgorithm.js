// changeList.push({ index: r, value: arr[r], color: '#6ee7b7' });
// changeList.push({ index: r, value: arr[r], color: '#ec4899' });
// changeList.push({index: r, value: arr[r], color: '#a78bfa',});

let changeList = [];

const quickSortAlgorithm = (arr, left, right) => {
  let index;

  index = partition(arr, left, right);

  if (arr.length > 1) {
    index = partition(arr, left, right);

    if (left < index - 1) {
      quickSortAlgorithm(arr, left, index - 1);
    }
    if (index < right) {
      quickSortAlgorithm(arr, index, right);
    }
  }

  console.log(arr);
  return arr;
};

const partition = (arr, left, right) => {
  let pivot = arr[Math.floor((right + left) / 2)];
  let l = left;
  let r = right;

  changeList.push({ index: r, value: arr[r], color: '#6ee7b7' });

  while (l <= r) {
    while (arr[l] < pivot) {
      l++;
    }
    while (arr[r] > pivot) {
      r--;
    }
    if (l <= r) {
      let tmp = arr[l];
      arr[l] = arr[r];
      arr[r] = tmp;
      l++;
      r--;
    }
  }
  return l;
};

//Need to wrap the function so it only accepts arr and only exports changeList
const exportFunction = (arr) => {
  quickSortAlgorithm(arr, 0, arr.length - 1);
  console.log(changeList);
  return changeList;
};

export default exportFunction;
