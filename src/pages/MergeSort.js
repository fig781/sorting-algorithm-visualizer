import React from 'react';
import Sorter from '../components/Sorter';
import mergeSortAlgorithm from '../algorithms/mergeSortAlgorithm';
import InfoSection from '../components/InfoSection';

const MergeSort = () => {
  return (
    <div>
      <section className='m-4'>
        <h1 className='text-center text-5xl'>Merge Sort</h1>
        <Sorter sortingAlgorithm={mergeSortAlgorithm} />
        <InfoSection
          algoInfo='Merge Sort is a divide and conquer algorithm meaning that it attempts to divide the array into smaller and smaller subarrays in order to sort it. The algorithm will progressively split the array in half creating subarrays in the process. It then sorts the halves and merges them back together.'
          bestTime='O(n log n)'
          worstTime='O(n log n)'
          avgTime='O(n log n)'
          spaceComp='O(n)'
        />
      </section>
    </div>
  );
};

export default MergeSort;
