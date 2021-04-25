const shellSortAlgorithm = (arr) => {
  let changeList = [];
  let increment = arr.length / 2;
  while (increment > 0) {
    for (let i = increment; i < arr.length; i++) {
      let j = i;
      let temp = arr[i];

      while (j >= increment && arr[j - increment] > temp) {
        arr[j] = arr[j - increment];
        changeList.push({ index: j, value: arr[j], color: '#6ee7b7' });

        j = j - increment;
        changeList.push({ index: j, value: arr[j], color: '#ec4899' });
        changeList.push({ index: j, value: arr[j], color: null });
        changeList.push({
          index: j + increment,
          value: arr[j + increment],
          color: null,
        });
      }
      arr[j] = temp;
      changeList.push({ index: j, value: arr[j], color: '#6ee7b7' });
      changeList.push({ index: j, value: arr[j], color: null });
    }
    if (increment === 2) {
      increment = 1;
    } else {
      increment = parseInt((increment * 5) / 11);
    }
  }

  for (let x = arr.length - 1; x >= 0; x--) {
    changeList.push({ index: x, value: arr[x], color: '#a78bfa' });
  }
  return changeList;
};

export default shellSortAlgorithm;
