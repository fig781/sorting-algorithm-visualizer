import { React, useLayoutEffect } from 'react';
import Header from '../components/Header';
import Sorter from '../components/Sorter';
import selectionSortAlgorithm from '../algorithms/selectionSortAlgorithm';
import InfoSection from '../components/InfoSection';

const SelectionSort = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Header bgColor='green' />
      <section className='m-4'>
        <h1 className='text-center text-5xl'>Selection Sort</h1>
        <Sorter sortingAlgorithm={selectionSortAlgorithm} btnColor='green' />
        <InfoSection
          algoInfo='The selection sort algorithm works by iterating through an array and repeatedly finding the minimum value from the unsorted portion of the array. After each pass of the array, it will place the minimum unsorted value in the left sorted portions of the array.'
          bestTime='O(n²)'
          worstTime='O(n²)'
          avgTime='O(n²)'
          spaceComp='O(1)'
        />
      </section>
    </>
  );
};

export default SelectionSort;
