import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

import bubble from '../icons/bubble.png';
import connection from '../icons/connection.png';
import fastTime from '../icons/fast-time.png';
import insert from '../icons/insert.png';
import list from '../icons/list.png';
import merge from '../icons/merge.png';

const Home = () => {
  return (
    <main className='flex flex-col min-h-screen'>
      <Header />
      <header>
        <h1 className='text-center text-6xl mt-10'>
          Sorting Algorithm Visualizer
        </h1>
      </header>
      <section className='flex-grow mt-14 mb-8 mx-auto grid lg:grid-cols-3 md:grid-cols-2'>
        <div className='font-mono cursor-pointer shadow-md hover:shadow-xl  rounded-3xl h-48 w-48 text-4xl text-center m-2 text-white bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 hover:from-blue-600'>
          <Link to='/bubblesort'>
            <img
              className='h-16 w-16 mx-auto mt-4'
              src={bubble}
              alt='bubbles'
            />
            <p className='mt-3'>Bubble</p>
            <p>Sort</p>
          </Link>
        </div>

        <div className='font-mono cursor-pointer shadow-md hover:shadow-xl rounded-3xl h-48 w-48 text-4xl text-center m-2 text-white bg-gradient-to-br from-green-400 via-green-500 to-green-600 hover:from-green-600'>
          <Link to='/selectionsort'>
            <img className='h-16 w-16 mx-auto mt-4' src={list} alt='list' />
            <p className='mt-3'>Select</p>
            <p>Sort</p>
          </Link>
        </div>

        <div className='font-mono cursor-pointer shadow-md hover:shadow-xl rounded-3xl h-48 w-48 text-4xl text-center m-2 text-white bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600 hover:from-indigo-600'>
          <Link to='insertionsort'>
            <img className='h-16 w-16 mx-auto mt-4' src={insert} alt='insert' />
            <p className='mt-3'>Insert</p>
            <p>Sort</p>
          </Link>
        </div>
        <div className='font-mono cursor-pointer shadow-md hover:shadow-xl rounded-3xl h-48 w-48 text-4xl text-center m-2 text-white bg-gradient-to-br from-red-400 via-red-500 to-red-600 hover:from-red-600'>
          <Link to='heapsort'>
            <img
              className='h-16 w-16 mx-auto mt-4'
              src={connection}
              alt='connection'
            />
            <p className='mt-3'>Heap</p>
            <p>Sort</p>
          </Link>
        </div>

        <div className='font-mono cursor-pointer shadow-md hover:shadow-xl rounded-3xl h-48 w-48 text-4xl text-center m-2 text-white bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-600'>
          <Link to='quicksort'>
            <img
              className='h-16 w-16 mx-auto mt-4'
              src={fastTime}
              alt='fastTime'
            />
            <p className='mt-3'>Quick</p>
            <p>Sort</p>
          </Link>
        </div>
        <div className='font-mono cursor-pointer shadow-md hover:shadow-xl rounded-3xl h-48 w-48 text-4xl text-center m-2 text-white bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 hover:from-purple-600'>
          <Link to='mergesort'>
            <img className='h-16 w-16 mx-auto mt-4' src={merge} alt='merge' />
            <p className='mt-3'>Merge</p>
            <p>Sort</p>
          </Link>
        </div>
      </section>
      <footer className='flex w-full justify-center p-4 pin-b bg-gray-600 text-gray-200'>
        <p>Made my Aden Eilers</p>
        <a
          className='pl-2 text-blue-300'
          href='https://github.com/fig781/sorting-algorithm-visualizer'
          target='_blank'
          rel='noreferrer'
        >
          Github
        </a>
      </footer>
    </main>
  );
};

export default Home;
