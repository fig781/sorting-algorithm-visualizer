import React from 'react';
import Sorter from '../components/Sorter';
import bubbleSortAlgorithm from '../algorithms/bubbleSortAlgorithm';

const BubbleSort = () => {
  return (
    <section className='m-4'>
      <h1 className='text-center text-5xl'>Bubble Sort</h1>
      <Sorter sortingAlgorithm={bubbleSortAlgorithm} />
      <article></article>
    </section>
  );
};

export default BubbleSort;
