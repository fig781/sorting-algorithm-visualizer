import React from 'react';
import Header from '../components/Header';

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
      <section className='flex-grow grid-cols-2 mt-14 mb-8 mx-auto'>
        <div className='flex flex-wrap'>
          <div className='font-mono cursor-pointer shadow-lg rounded-3xl h-48 w-48 text-4xl text-center m-2 text-white bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600'>
            <img
              className='h-16 w-16 mx-auto mt-4'
              src={bubble}
              alt='bubbles'
            />
            <p className='mt-3'>Bubble</p>
            <p>Sort</p>
          </div>
          <div className='font-mono cursor-pointer shadow-lg rounded-3xl h-48 w-48 text-4xl text-center m-2 text-white bg-gradient-to-br from-green-400 via-green-500 to-green-600'>
            <img className='h-16 w-16 mx-auto mt-4' src={list} alt='list' />
            <p className='mt-3'>Select</p>
            <p>Sort</p>
          </div>
        </div>
        <div className='flex'>
          <div className='font-mono cursor-pointer shadow-lg rounded-3xl h-48 w-48 text-4xl text-center m-2 text-white bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600'>
            <img className='h-16 w-16 mx-auto mt-4' src={insert} alt='insert' />
            <p className='mt-3'>Insert</p>
            <p>Sort</p>
          </div>
          <div className='font-mono cursor-pointer shadow-lg rounded-3xl h-48 w-48 text-4xl text-center m-2 text-white bg-gradient-to-br from-red-400 via-red-500 to-red-600'>
            <img
              className='h-16 w-16 mx-auto mt-4'
              src={connection}
              alt='connection'
            />
            <p className='mt-3'>Heap</p>
            <p>Sort</p>
          </div>
        </div>
        <div className='flex'>
          <div className='font-mono cursor-pointer shadow-lg rounded-3xl h-48 w-48 text-4xl text-center m-2 text-white bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600'>
            <img
              className='h-16 w-16 mx-auto mt-4'
              src={fastTime}
              alt='fastTime'
            />
            <p className='mt-3'>Quick</p>
            <p>Sort</p>
          </div>
          <div className='font-mono cursor-pointer shadow-lg rounded-3xl h-48 w-48 text-4xl text-center m-2 text-white bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600'>
            <img className='h-16 w-16 mx-auto mt-4' src={merge} alt='merge' />
            <p className='mt-3'>Merge</p>
            <p>Sort</p>
          </div>
        </div>
      </section>
      <footer className='flex w-full justify-center p-4 pin-b bg-gray-300'>
        <p>Made my Aden Eilers</p>
        <a
          className='pl-2 text-blue-500'
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
