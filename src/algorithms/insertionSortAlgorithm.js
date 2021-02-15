const insertionSortAlgorithm = (arr) => {
  let changeList = [];
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    // Choosing the first element in our unsorted subarray
    let current = arr[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while (j >= 0 && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return changeList;
};

export default insertionSortAlgorithm;
