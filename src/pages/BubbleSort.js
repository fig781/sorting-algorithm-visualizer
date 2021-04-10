import React from 'react';
import Header from '../components/Header';
import Sorter from '../components/Sorter';
import bubbleSortAlgorithm from '../algorithms/bubbleSortAlgorithm';
import InfoSection from '../components/InfoSection';

const BubbleSort = () => {
  return (
    <>
      <Header bgColor='blue' />
      <main className='m-4'>
        <h1 className='text-center text-5xl'>Bubble Sort</h1>
        <Sorter sortingAlgorithm={bubbleSortAlgorithm} />
        <InfoSection
          algoInfo='Bubble sort is a simple sorting algorithm that iterates through an array and compares neighboring values. If the first value is higher then the second value, then it will swap their positions. Each pass of the array will put the largest unsorted value on the far right side of the array. '
          bestTime='O(n)'
          worstTime='O(n²)'
          avgTime='O(n²)'
          spaceComp='O(1)'
        />
      </main>
    </>
  );
};

export default BubbleSort;
