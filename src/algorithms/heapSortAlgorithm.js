let changeList;

const maxHeapify = (arr, len, i) => {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;

  if (l < len && arr[l] > arr[largest]) {
    largest = l;
  }
  if (r < len && arr[r] > arr[largest]) {
    largest = r;
  }
  if (largest !== i) {
    let temp = arr[i];
    arr[i] = arr[largest];
    changeList.push({ index: i, value: arr[i], color: '#ec4899' });

    arr[largest] = temp;
    changeList.push({ index: largest, value: arr[largest], color: '#ec4899' });

    changeList.push({ index: i, value: arr[i], color: null });
    changeList.push({ index: largest, value: arr[largest], color: null });

    maxHeapify(arr, len, largest);
  }
};

const heapSort = (arr) => {
  changeList = [];
  const len = arr.length;
  for (let i = parseInt(len / 2 - 1); i >= 0; i--) {
    maxHeapify(arr, len, i);
  }

  for (let i = len - 1; i >= 0; i--) {
    let temp = arr[0];
    arr[0] = arr[i];
    changeList.push({ index: 0, value: arr[0], color: '#6ee7b7' });

    arr[i] = temp;
    changeList.push({ index: i, value: arr[i], color: '#6ee7b7' });

    changeList.push({ index: 0, value: arr[0], color: null });
    changeList.push({ index: i, value: arr[i], color: '#a78bfa' });

    maxHeapify(arr, i, 0);
  }
  return changeList;
};

export default heapSort;
