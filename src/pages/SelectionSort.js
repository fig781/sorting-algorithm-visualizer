import React from 'react';
import Sorter from '../components/Sorter';
import selectionSortAlgorithm from '../algorithms/selectionSortAlgorithm';

const SelectionSort = () => {
  return (
    <div>
      <section className='m-4'>
        <h1 className='text-center text-5xl'>Selection Sort</h1>
        <Sorter sortingAlgorithm={selectionSortAlgorithm} />
        <article></article>
      </section>
    </div>
  );
};

export default SelectionSort;
