import React from 'react';
import Sorter from '../components/Sorter';
import insertionSortAlgorithm from '../algorithms/insertionSortAlgorithm';

const InsertionSort = () => {
  return (
    <div>
      <section className='m-4'>
        <h1 className='text-center text-5xl'>Insertion Sort</h1>
        <Sorter sortingAlgorithm={insertionSortAlgorithm} />
        <article></article>
      </section>
    </div>
  );
};

export default InsertionSort;
