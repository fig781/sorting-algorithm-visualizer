import React from 'react';
import Header from '../components/Header';

const Home = () => {
  return (
    <main className='flex flex-col min-h-screen'>
      <Header />
      <header>
        <h1 className='text-center text-5xl mt-10'>Algorithm Visualizer</h1>
      </header>
      <section className='flex-grow'>
        <div>Bubble Sort</div>
        <div>Selection Sort</div>
        <div>Insertion Sort</div>
        <div>Heap Sort</div>
        <div>Quick Sort</div>
        <div>Merge Sort</div>
      </section>
      <footer className='w-full text-center p-4 pin-b bg-green-100'>
        Made my Aden Eilers
      </footer>
    </main>
  );
};

export default Home;
