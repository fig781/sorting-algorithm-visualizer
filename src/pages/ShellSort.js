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
      <Header bgColor='bg-purple-600' />
      <section className='m-4'>
        <h1 className='text-center text-5xl'>Shell Sort</h1>
        <Sorter
          sortingAlgorithm={shellSortAlgorithm}
          btnColor='bg-purple-600'
        />
        <InfoSection
          algoInfo='Shell sort starts by sorting elements that are far apart from each other, then it progressively reduces the gap between elements being compared. Starting with far apart elements, it can move some out-of-place elements into position faster than a simple nearest neighbor approach.'
          bestTime='O(n log n)'
          worstTime='O(n²)'
          avgTime='O(n log n)'
          spaceComp='O(n)'
        />
      </section>
    </>
  );
};

export default ShellSort;
