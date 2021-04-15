let changeList;

const quickSortAlgorithm = (arr) => {
  changeList = [];
  partition(arr, 0, arr.length - 1);

  for (let x = arr.length - 1; x >= 0; x--) {
    changeList.push({ index: x, value: arr[x], color: '#a78bfa' });
  }

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
        h--;
      }
      changeList.push({ index: l, value: arr[l], color: '#ec4899' });
      arr[l] = arr[h];
      changeList.push({ index: l, value: arr[l], color: '#6ee7b7' });
      changeList.push({ index: l, value: arr[l], color: null });

      while (tmp >= arr[l] && l < h) {
        l++;
      }
      changeList.push({ index: l, value: arr[l], color: '#ec4899' });
      arr[h] = arr[l];
      changeList.push({ index: h, value: arr[h], color: '#6ee7b7' });
      changeList.push({ index: h, value: arr[h], color: null });
    }
    arr[l] = tmp;
    changeList.push({ index: l, value: arr[l], color: '#ec4899' });
    changeList.push({ index: l, value: arr[l], color: null });
    partition(arr, low, l - 1);
    low = l + 1;
  }
};

export default quickSortAlgorithm;
