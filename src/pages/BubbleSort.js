import React from 'react';
import Sorter from '../components/Sorter';

const BubbleSort = () => {
  return (
    <section>
      <h1 className='text-center text-5xl mt-5'>Bubble Sort</h1>
      <Sorter />
      <article>
        <p>
          A simple implementation of bubble sort algorithm in javascript. Bubble
          sort is the simplest sorting algorithm which arranges the number in
          increasing or decreasing order by repeatedly swapping the adjacent
          elements if they are in the wrong order. This is repeated until all
          the elements are sorted in the required order.
        </p>
      </article>
    </section>
  );
};

export default BubbleSort;
