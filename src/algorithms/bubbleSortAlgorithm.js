const bubbleSortAlgorithm = (arr) => {
  let changeList = [];
  const len = arr.length;
  let swapped;
  let lastIndex = len - 1;
  let lastValue;
  do {
    swapped = false;
    for (let i = 0; i < lastIndex; i++) {
      changeList.push({ index: i, value: arr[i], color: '#6ee7b7' });
      changeList.push({ index: i + 1, value: arr[i + 1], color: '#6ee7b7' });

      if (arr[i] > arr[i + 1]) {
        const tmp = arr[i];

        arr[i] = arr[i + 1];
        changeList.push({ index: i, value: arr[i], color: '#ec4899' });

        arr[i + 1] = tmp;
        changeList.push({ index: i + 1, value: arr[i + 1], color: '#ec4899' });

        swapped = true;
      }
      changeList.push({ index: i, value: arr[i], color: null });
      changeList.push({ index: i + 1, value: arr[i + 1], color: null });
      if (i === lastIndex - 1) {
        lastValue = arr[i + 1];
      }
    }
    lastIndex--;
    changeList.push({
      index: lastIndex + 1,
      value: lastValue,
      color: '#a78bfa',
    });
  } while (swapped);

  for (; lastIndex >= 0; lastIndex--) {
    changeList.push({
      index: lastIndex,
      value: arr[lastIndex],
      color: '#a78bfa',
    });
  }
  return changeList;
};

export default bubbleSortAlgorithm;
