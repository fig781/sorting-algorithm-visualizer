import { React, useState, useEffect } from 'react';
import Bar from './Bar';
import bubbleSort from '../algorithms/bubbleSort';

const Sorter = () => {
  const [arraySize, setArraySize] = useState(30);
  const [speed, setSpeed] = useState(5);
  const [sorterArray, setSorterArray] = useState([]);

  useEffect(() => {
    const arr = [];
    for (let x = 1; x <= 30; x++) {
      arr.push({
        index: x - 1,
        color: null,
        value: Math.round(Math.random() * (30 - 1) + 1),
      });
    }
    setSorterArray(...[arr]);
  }, []);

  useEffect(() => {
    randomize(arraySize);
  }, [arraySize]);

  const randomize = (arraySize) => {
    const arr = [];
    for (let x = 1; x <= arraySize; x++) {
      arr.push({
        index: x - 1,
        color: null,
        value: Math.round(Math.random() * (arraySize - 1) + 1),
      });
    }
    setSorterArray(...[arr]);
  };

  const interpreteChanges = (changeList) => {
    const len = changeList.length;
    console.log(len);
    for (let x = 0; x < len; x++) {
      setTimeout(() => {
        const newState = sorterArray;
        newState[changeList[x].index] = changeList[x];
        setSorterArray(...[newState]);
        console.log(changeList[x]);
      }, speed * 500 * x);
    }
  };

  const onClickSort = () => {
    const arr = [];
    for (let i of sorterArray) {
      arr.push(i.value);
    }
    interpreteChanges(bubbleSort(arr));
  };

  return (
    <div className='my-5'>
      <div
        className='flex items-baseline justify-center mb-3 '
        style={{ flexFlow: 'row nowrap' }}
      >
        {sorterArray.map((i) => (
          <Bar
            key={i.index}
            number={i.value}
            itemsAmount={arraySize}
            color={i.color}
          />
        ))}
      </div>
      <div className='flex flex-wrap justify-center space-x-2'>
        <button
          className='bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 mb-2 py-1 focus:outline-none'
          onClick={onClickSort}
        >
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
          onClick={() => randomize(arraySize)}
        >
          Randomize
        </button>
        <div className='flex items-center space-x-1 mb-2'>
          <p>Array Size: {arraySize}</p>
          <input
            type='range'
            min={10}
            max={100}
            value={arraySize}
            onChange={(e) => setArraySize(e.target.value)}
          />
        </div>
        <div className='flex items-center space-x-1 mb-2'>
          <p>Speed</p>
          <input
            type='range'
            min={1}
            max={10}
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Sorter;
