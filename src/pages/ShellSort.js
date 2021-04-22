import { React, useLayoutEffect } from 'react';
import Header from '../components/Header';
import Sorter from '../components/Sorter';
import shellSortAlgorithm from '../algorithms/shellSortAlgorithm';
import InfoSection from '../components/InfoSection';

const ShellSort = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Header bgColor='purple' />
      <section className='m-4'>
        <h1 className='text-center text-5xl'>Shell Sort</h1>
        <Sorter sortingAlgorithm={shellSortAlgorithm} btnColor='purple' />
        <InfoSection
          algoInfo='Merge Sort is a divide and conquer algorithm meaning that it attempts to divide the array into smaller and smaller subarrays in order to sort it. The algorithm will progressively split the array in half creating subarrays in the process. It then sorts the halves and merges them back together.'
          bestTime='O(n log n)'
          worstTime='O(n log n)'
          avgTime='O(n log n)'
          spaceComp='O(n)'
        />
      </section>
    </>
  );
};

export default ShellSort;
