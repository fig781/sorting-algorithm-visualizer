import { React, useState, useEffect } from 'react';
import Bar from './Bar';

const Sorter = ({ sortingAlgorithm }) => {
  const [arraySize, setArraySize] = useState(20);
  const [speed, setSpeed] = useState(3);
  const [sorterArray, setSorterArray] = useState([]);
  const [sorterArrayOriginal, setSorterArrayOriginal] = useState([]);
  const [intervalId, setIntervalId] = useState();
  const [sorting, setSorting] = useState(false);

  useEffect(() => {
    const arr = [];
    for (let x = 0; x < 20; x++) {
      arr.push({
        index: x,
        color: null,
        value: Math.round(Math.random() * (20 - 1) + 1),
      });
    }
    setSorterArray(...[arr]);
    setSorterArrayOriginal([...arr]);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const randomizeArray = (arraySize) => {
    clearInterval(intervalId);
    setSorting(false);
    const arr = [];
    for (let x = 0; x < arraySize; x++) {
      arr.push({
        index: x,
        color: null,
        value: Math.round(Math.random() * (arraySize - 1) + 1),
      });
    }
    setSorterArray(...[arr]);
    setSorterArrayOriginal([...arr]);
  };

  const interpreteChanges = (changeList) => {
    const len = changeList.length;
    let x = 0;
    let barUpdateInterval = setInterval(() => {
      const newState = sorterArray;
      newState[changeList[x].index] = changeList[x];
      setSorterArray([...newState]);

      if (x === len - 1) {
        clearInterval(barUpdateInterval);
        setSorting(false);
      }
      x++;
    }, (9 - speed) * 30);
    return barUpdateInterval;
  };

  const onClickSort = () => {
    setSorting(true);
    const arr = sorterArray.map((i) => i.value);
    console.log();
    setIntervalId(interpreteChanges(sortingAlgorithm(arr)));
  };

  const onClickReset = () => {
    clearInterval(intervalId);
    setSorterArray([...sorterArrayOriginal]);
    setSorting(false);
  };

  const onChangeArraySize = (e) => {
    setArraySize(e.target.value);
    randomizeArray(e.target.value);
  };

  return (
    <div className='my-5'>
      <div className='flex items-end justify-center mb-3 h-80'>
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
          className={`bg-blue-600 text-gray-200 rounded px-4 mb-2 py-1 focus:outline-none ${
            sorting ? 'bg-opacity-50' : 'hover:bg-blue-500'
          }`}
          onClick={onClickSort}
          disabled={sorting}
        >
          Sort
        </button>
        <button
          className={`bg-blue-600 text-gray-200 rounded px-4 mb-2 py-1 focus:outline-none ${
            !sorting ? 'bg-opacity-50' : 'hover:bg-blue-500'
          }`}
          onClick={onClickReset}
        >
          Reset
        </button>
        <button
          className='bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 mb-2 py-1 focus:outline-none'
          onClick={() => randomizeArray(arraySize)}
        >
          Randomize
        </button>
        <div className='flex items-center space-x-1 mb-2'>
          <p>Array Size: {arraySize}</p>
          <input
            type='range'
            min={10}
            max={80}
            value={arraySize}
            onChange={onChangeArraySize}
            disabled={sorting}
          />
        </div>
        <div className='flex items-center space-x-1 mb-2'>
          <p>Speed</p>
          <input
            type='range'
            min={1}
            max={8}
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
            disabled={sorting}
          />
        </div>
      </div>
    </div>
  );
};

export default Sorter;
