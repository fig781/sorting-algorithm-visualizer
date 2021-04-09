import React from 'react';
import Header from '../components/Header';
import heapSortAlgorithm from '../algorithms/heapSortAlgorithm';
import Sorter from '../components/Sorter';
import InfoSection from '../components/InfoSection';

const HeapSort = () => {
  return (
    <>
      <Header />
      <main className='m-4'>
        <h1 className='text-center text-5xl'>Heap Sort</h1>
        <Sorter sortingAlgorithm={heapSortAlgorithm} />
        <InfoSection
          algoInfo='Heap sort can be thought of as an improved version of selection sort. Like selection sort, heap sort will split the array into sorted and unsorted sides. Instead of spending time on linear-time scan of the unsorted region, heap sort creates a heap data structure to store the largest and smallest values quickly.'
          bestTime='O(n log n)'
          worstTime='O(n log n)'
          avgTime='O(n log n)'
          spaceComp='O(1)'
        />
      </main>
    </>
  );
};

export default HeapSort;
