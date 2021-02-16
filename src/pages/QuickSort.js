import React from 'react';
import Sorter from '../components/Sorter';
import quickSortAlgorithm from '../algorithms/quickSortAlgorithm';

const QuickSort = () => {
  return (
    <div>
      <section className='m-4'>
        <h1 className='text-center text-5xl'>Quick Sort</h1>
        <Sorter sortingAlgorithm={quickSortAlgorithm} />
        <article></article>
      </section>
    </div>
  );
};

export default QuickSort;
