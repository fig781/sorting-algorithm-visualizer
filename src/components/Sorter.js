import { React, useState, useEffect } from 'react';
import Bar from './Bar';

const Sorter = ({ sortingAlgorithm }) => {
  const [arraySize, setArraySize] = useState(10);
  const [speed, setSpeed] = useState(3);
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
    randomizeArray(arraySize);
  }, [arraySize]);

  const randomizeArray = (arraySize) => {
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

  // const finishColoringBars = () => {
  //   console.log('runith');
  //   for (let x = arraySize - 1; x >= 0; x--) {
  //     if (sorterArray[x].color !== '#a78bfa') {
  //       const newState = sorterArray;
  //       newState[x] = { index: x, color: '#a78bfa', value: newState[x].value };
  //       setSorterArray([...newState]);
  //     }
  //   }
  // };

  const interpreteChanges = async (changeList) => {
    const len = changeList.length;

    for (let x = 0; x < len; x++) {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('Ran');
          const newState = sorterArray;
          newState[changeList[x].index] = changeList[x];
          setSorterArray([...newState]);
        }, (9 - speed) * 30 * x);
        resolve();
      });
    }
    //finishColoringBars();
  };

  const onClickSort = () => {
    const arr = [];
    for (let i of sorterArray) {
      arr.push(i.value);
    }
    interpreteChanges(sortingAlgorithm(arr));
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
            onChange={(e) => setArraySize(e.target.value)}
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
          />
        </div>
      </div>
    </div>
  );
};

export default Sorter;
