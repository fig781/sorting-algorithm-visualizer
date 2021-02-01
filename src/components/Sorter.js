import { React, useState, useEffect } from 'react';

const Sorter = () => {
  const [arraySize, setArraySize] = useState(20);
  const [speed, setSpeed] = useState(5);
  const [sorterArray, setSorterArray] = useState([]);

  useEffect(() => {
    const arr = [];
    for (let x = 1; x <= 20; x++) {
      arr.push(x);
    }
    setSorterArray(shuffleArray(arr));
  }, []);

  useEffect(() => {
    const arr = [];
    for (let x = 1; x <= arraySize; x++) {
      arr.push(x);
    }
    setSorterArray(shuffleArray(arr));
  }, [arraySize]);

  const shuffleArray = (arr) => {
    let currentIndex = arr.length,
      temporaryValue,
      randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }
    return arr;
  };

  const updateArray = (e) => {
    setArraySize(e.target.value);
  };

  const updateSpeed = (e) => {
    setSpeed(e.target.value);
  };

  return (
    <div className='my-5'>
      <div>sdfdf</div>
      <div className='flex flex-wrap justify-center space-x-2'>
        <button className='bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 mb-2 py-1 focus:outline-none'>
          Sort
        </button>
        <button className='bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 mb-2 py-1 focus:outline-none'>
          Pause
        </button>
        <button className='bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 mb-2 py-1 focus:outline-none'>
          Reset
        </button>
        <button
          className='bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 mb-2 py-1 focus:outline-none'
          onClick={() => setSorterArray(shuffleArray(sorterArray))}
        >
          Randomize
        </button>
        <div className='flex items-center space-x-1 mb-2'>
          <p>Array Size</p>
          <input
            type='range'
            min={20}
            max={200}
            value={arraySize}
            onChange={updateArray}
          />
          <p>{arraySize}</p>
        </div>
        <div className='flex items-center space-x-1'>
          <p>Speed</p>
          <input
            type='range'
            min={1}
            max={10}
            value={speed}
            onChange={updateSpeed}
          />
        </div>
      </div>
    </div>
  );
};

export default Sorter;
