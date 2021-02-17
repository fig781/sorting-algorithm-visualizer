import React from 'react';
import Sorter from '../components/Sorter';
import mergeSortAlgorithm from '../algorithms/mergeSortAlgorithm';

const MergeSort = () => {
  return (
    <div>
      <section className='m-4'>
        <h1 className='text-center text-5xl'>Merge Sort</h1>
        <Sorter sortingAlgorithm={mergeSortAlgorithm} />
        <article></article>
      </section>
    </div>
  );
};

export default MergeSort;
