// changeList.push({ index: r, value: arr[r], color: '#6ee7b7' });
// changeList.push({ index: r, value: arr[r], color: '#ec4899' });
// changeList.push({index: r, value: arr[r], color: '#a78bfa',});

let changeList;

const quickSortAlgorithm = (arr) => {
  changeList = [];
  partition(arr, 0, arr.length - 1);
  return changeList;
};

const partition = (arr, low, high) => {
  let h, l, tmp;
  while (high > low) {
    l = low;
    h = high;
    tmp = arr[low];
    while (l < h) {
      while (arr[h] > tmp) {
        changeList.push({ index: h, value: arr[h], color: '#6ee7b7' });
        changeList.push({ index: h, value: arr[h], color: null });
        h--;
      }
      arr[l] = arr[h];
      changeList.push({ index: l, value: arr[l], color: '#ec4899' });
      changeList.push({ index: l, value: arr[l], color: null });

      while (tmp >= arr[l] && l < h) {
        changeList.push({ index: l, value: arr[l], color: '#ec4899' });
        changeList.push({ index: l, value: arr[l], color: null });
        l++;
      }
      arr[h] = arr[l];
      changeList.push({ index: h, value: arr[h], color: '#6ee7b7' });
      changeList.push({ index: h, value: arr[h], color: null });
    }
    arr[l] = tmp;
    changeList.push({ index: l, value: arr[l], color: '#6ee7b7' });
    changeList.push({ index: l, value: arr[l], color: null });
    partition(arr, low, l - 1);
    low = l + 1;
  }
};

// //Need to wrap the function so it only accepts arr and only exports changeList
// const exportFunction = (arr) => {
//   changeList = [];
//   quickSortAlgorithm(arr, 0, arr.length - 1);
//   return changeList;
// };

export default quickSortAlgorithm;
