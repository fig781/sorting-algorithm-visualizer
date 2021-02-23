import React from 'react';
import Sorter from '../components/Sorter';
import insertionSortAlgorithm from '../algorithms/insertionSortAlgorithm';
import InfoSection from '../components/InfoSection';

const InsertionSort = () => {
  return (
    <div>
      <section className='m-4'>
        <h1 className='text-center text-5xl'>Insertion Sort</h1>
        <Sorter sortingAlgorithm={insertionSortAlgorithm} />
        <InfoSection
          algoInfo='Insertion sort is an algorithm that will iterate through an array creating a sorted list of values on the left side and an unsorted list on the right side. As it iterates through the unsorted array, it will carry values to the left side of the array into their correct sorted position.'
          bestTime='O(n)'
          worstTime='O(n²)'
          avgTime='O(n²)'
          spaceComp='O(1)'
        />
      </section>
    </div>
  );
};

export default InsertionSort;
