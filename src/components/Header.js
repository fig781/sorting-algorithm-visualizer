import React from 'react';
import { Link } from 'react-router-dom';
//rafce
const Header = () => {
  return (
    <nav className='bg-blue-200 flex justify-between items-center h-16 realtive shawdow-sm'>
      <Link to='/' className='ml-5 justify-start'>
        <button>Home</button>
      </Link>
      <div className='space-x-3 mr-5'>
        <Link to='/bubblesort'>
          <button>bubblesort</button>
        </Link>
        <Link to='/selectionsort'>
          <button>selectionsort</button>
        </Link>
        <Link to='/insertionsort'>
          <button>insertionSort</button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
