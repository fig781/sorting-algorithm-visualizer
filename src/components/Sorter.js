import React from 'react';

const Sorter = () => {
  return (
    <div className='my-5'>
      <div>sdfdf</div>
      <div className='flex justify-center space-x-2'>
        <button className='bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 py-1 focus:outline-none'>
          Sort
        </button>
        <button className='bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 py-1 focus:outline-none'>
          Pause
        </button>
        <button className='bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 py-1 focus:outline-none'>
          Reset
        </button>
        <button className='bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 py-1 focus:outline-none'>
          Randomize
        </button>
      </div>
    </div>
  );
};

export default Sorter;
