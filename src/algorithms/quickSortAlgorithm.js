// changeList.push({ index: r, value: arr[r], color: '#6ee7b7' });
// changeList.push({ index: r, value: arr[r], color: '#ec4899' });
// changeList.push({index: r, value: arr[r], color: '#a78bfa',});

let changeList;

// const quickSortAlgorithm = (arr, left, right) => {
//   let index = partition(arr, left, right);

//   if (left < index - 1) {
//     quickSortAlgorithm(arr, left, index - 1);
//   }
//   if (index < right) {
//     quickSortAlgorithm(arr, index, right);
//   }

//   changeList.push({ index: index, value: arr[index], color: '#a78bfa' });
//   return arr;
// };

// const partition = (arr, left, right) => {
//   let pivot = arr[Math.floor((right + left) / 2)];
//   let l = left;
//   let r = right;

//   changeList.push({ index: l, value: arr[l], color: '#ec4899' });
//   changeList.push({ index: r, value: arr[r], color: '#6ee7b7' });

//   while (l <= r) {
//     while (arr[l] < pivot) {
//       l++;
//       changeList.push({ index: l, value: arr[l], color: '#ec4899' });
//       changeList.push({ index: l, value: arr[l], color: null });
//     }
//     while (arr[r] > pivot) {
//       r--;
//       changeList.push({ index: r, value: arr[r], color: '#6ee7b7' });
//       changeList.push({ index: r, value: arr[r], color: null });
//     }
//     if (l <= r) {
//       let tmp = arr[l];
//       arr[l] = arr[r];
//       arr[r] = tmp;
//       l++;
//       r--;
//     }
//   }
//   changeList.push({ index: l, value: arr[l], color: '#ec4899' });
//   changeList.push({ index: l, value: arr[l], color: null });
//   changeList.push({ index: r, value: arr[r], color: '#6ee7b7' });
//   changeList.push({ index: r, value: arr[r], color: null });
//   return l;
// };

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
        h--;
      }
      arr[l] = arr[h];

      while (tmp >= arr[l] && l < h) {
        l++;
      }
      arr[h] = arr[l];
    }
    arr[l] = tmp;
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
