import React from 'react';

const InfoSection = ({ algoInfo, worstTime, bestTime, avgTime, spaceComp }) => {
  return (
    <section className='flex flex-wrap justify-center'>
      <article className='max-w-md rounded-md ring-1 ring-black ring-opacity-5 shadow-md p-2 m-2'>
        <h2 className='font-semibold'>Information</h2>
        <p className='text-gray-700'>{algoInfo}</p>
      </article>
      <article className='rounded-md ring-1 ring-black ring-opacity-5 shadow-md p-2 m-2'>
        <h2 className='font-semibold'>Time Complexity</h2>
        <p className='text-gray-700'>
          Worst-case performance: <span>{worstTime}</span>
        </p>
        <p className='text-gray-700'>
          Best-case performance: <span>{bestTime}</span>
        </p>
        <p className='text-gray-700 pb-1'>
          Average performance: <span>{avgTime}</span>
        </p>
        <p className='font-semibold border-t-2'>
          Space Complexity:{' '}
          <span className='text-gray-700 font-normal'>{spaceComp}</span>
        </p>
      </article>
    </section>
  );
};

export default InfoSection;
