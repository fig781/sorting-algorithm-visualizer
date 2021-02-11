// {color: null, index: 0}
// {swap: [0,1]}

const bubbleSort = (arr) => {
  let changeList = [];
  const len = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      changeList.push({ index: i, value: arr[i], color: '#10b981' });
      //highlight selected bar
      if (arr[i] > arr[i + 1]) {
        //highlight secondary bar
        const tmp = arr[i];
        //swapping animation
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swapped = true;
      }

      changeList.push({ index: i, value: arr[i], color: null });
    }
  } while (swapped);
  return changeList;
};

export default bubbleSort;
