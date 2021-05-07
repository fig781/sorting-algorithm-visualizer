import { React, useState, useEffect } from 'react';
import Bar from './Bar';

const Sorter = ({ sortingAlgorithm, btnColor }) => {
  const [arraySize, setArraySize] = useState(50);
  const [speed, setSpeed] = useState(6);
  const [maxArraySize, setMaxArraySize] = useState(80);
  const [sorterArray, setSorterArray] = useState([]);
  const [sorterArrayOriginal, setSorterArrayOriginal] = useState([]);
  const [intervalId, setIntervalId] = useState(null);
  const [sorting, setSorting] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const arr = [];
    for (let x = 0; x < 50; x++) {
      arr.push({
        index: x,
        color: null,
        value: Math.round(Math.random() * (50 - 1) + 1),
      });
    }
    setSorterArray(...[arr]);
    setSorterArrayOriginal([...arr]);

    window.addEventListener('resize', () => setScreenWidth(window.innerWidth));

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (screenWidth >= 1640) {
      setArraySize(50);
      setMaxArraySize(80);
      randomizeArray(50);
    } else if (screenWidth > 1440 && screenWidth < 1640) {
      setArraySize(50);
      setMaxArraySize(70);
      randomizeArray(50);
    } else if (screenWidth > 1240 && screenWidth < 1440) {
      setArraySize(50);
      setMaxArraySize(60);
      randomizeArray(50);
    } else if (screenWidth > 1040 && screenWidth < 1240) {
      setArraySize(50);
      setMaxArraySize(50);
      randomizeArray(50);
    } else if (screenWidth > 840 && screenWidth < 1040) {
      setArraySize(40);
      setMaxArraySize(40);
      randomizeArray(40);
    } else if (screenWidth > 640 && screenWidth < 840) {
      setArraySize(30);
      setMaxArraySize(30);
      randomizeArray(30);
    } else if (screenWidth > 440 && screenWidth < 640) {
      setArraySize(20);
      setMaxArraySize(20);
      randomizeArray(20);
    } else if (screenWidth > 300 && screenWidth < 440) {
      setArraySize(10);
      setMaxArraySize(15);
      randomizeArray(10);
    }
  }, [screenWidth]);

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
    setIntervalId(interpreteChanges(sortingAlgorithm(arr)));
  };

  const onClickReset = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setSorterArray([...sorterArrayOriginal]);
    setSorting(false);
  };

  const onChangeArraySize = (e) => {
    setArraySize(e.target.value);
    randomizeArray(e.target.value);
  };

  return (
    <div className='mt-5'>
      <div className='flex items-end justify-center mb-3 h-80'>
        {sorterArray.map((i) => (
          <Bar key={i.index} number={i.value} itemsAmount={arraySize} color={i.color} />
        ))}
      </div>
      <div className='flex flex-wrap justify-center space-x-2'>
        <button
          className={`bg-${btnColor}-600 text-gray-100 rounded px-4 mb-2 py-1 focus:outline-none focus:bg-${btnColor}-600 disabled:opacity-50 ${
            sorting ? 'hover:opacity-50' : `hover:bg-${btnColor}-700`
          }`}
          onClick={onClickSort}
          disabled={sorting}
        >
          Sort
        </button>
        <button
          className={`bg-${btnColor}-600 text-gray-100 rounded px-4 mb-2 py-1 focus:outline-none hover:bg-${btnColor}-700 focus:bg-${btnColor}-600 `}
          onClick={onClickReset}
        >
          Reset
        </button>
        <button
          className={`bg-${btnColor}-600 text-gray-100 rounded  px-4 mb-2 py-1 focus:outline-none hover:bg-${btnColor}-700 focus:bg-${btnColor}-600`}
          onClick={() => randomizeArray(arraySize)}
        >
          Randomize
        </button>
        <div className='flex items-center space-x-1 mb-2'>
          <p>Array Size: {arraySize}</p>
          <input
            className='rounded-lg overflow-hidden appearance-none h-3 w-128'
            style={{ backgroundColor: '#b3b3cc' }}
            type='range'
            min={10}
            max={maxArraySize}
            value={arraySize}
            onChange={onChangeArraySize}
            disabled={sorting}
          />
        </div>
        <div className='flex items-center space-x-1 mb-2'>
          <p>Speed</p>
          <input
            className='rounded-lg overflow-hidden appearance-none h-3 w-128'
            style={{ backgroundColor: '#b3b3cc' }}
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
