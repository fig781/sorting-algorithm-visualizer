import React from 'react';
import Sorter from '../components/Sorter';
import bubbleSortAlgorithm from '../algorithms/bubbleSortAlgorithm';
import InfoSection from '../components/InfoSection';

const BubbleSort = () => {
  return (
    <main className='m-4'>
      <h1 className='text-center text-5xl'>Bubble Sort</h1>
      <Sorter sortingAlgorithm={bubbleSortAlgorithm} />
      <InfoSection
        algoInfo='Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list.'
        bestTime='O(n)'
        worstTime='O(n²)'
        avgTime='O(n²)'
        spaceComp='O(1)'
      />
    </main>
  );
};

export default BubbleSort;
