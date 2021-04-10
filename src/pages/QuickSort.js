import { React, useLayoutEffect } from 'react';
import Header from '../components/Header';
import Sorter from '../components/Sorter';
import quickSortAlgorithm from '../algorithms/quickSortAlgorithm';
import InfoSection from '../components/InfoSection';

const QuickSort = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Header bgColor='yellow' />
      <section className='m-4'>
        <h1 className='text-center text-5xl'>Quick Sort</h1>
        <Sorter sortingAlgorithm={quickSortAlgorithm} btnColor='yellow' />
        <InfoSection
          algoInfo='Quick sort is a divide and conquer algorithm meaning that it attempts to divide the array into smaller and smaller subarrays in order to sort it. The algorithm picks an element as a pivot and partitions the array around the pivot. Progressively, the algorithm will divide the array into smaller and smaller sets based on the pivot until the subsets are as small as they can be. At which point it will sort and merge all of the subsets. '
          bestTime='O(n log n)'
          worstTime='O(n²)'
          avgTime='O(n log n)'
          spaceComp='O(log n)'
        />
      </section>
    </>
  );
};

export default QuickSort;
