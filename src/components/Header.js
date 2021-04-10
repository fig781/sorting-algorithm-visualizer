import { React, useState } from 'react';
import { Link } from 'react-router-dom';
//rafce
const Header = ({ bgColor = 'gray' }) => {
  const [showList, setShowList] = useState(false);

  const renderList = () => {
    if (showList) {
      return (
        <div
          className='origin-top-right absolute left-0 mt-1
                    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
          onClick={() => {
            setShowList(!showList);
          }}
        >
          <div
            className='py-1'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='options-menu'
          >
            <Link to='/bubblesort'>
              <button className='block text-left px-4 py-2 w-full text-gray-700 hover:bg-gray-200 hover:text-gray-900'>
                Bubble Sort
              </button>
            </Link>
            <Link to='/selectionsort'>
              <button className='block text-left px-4 py-2 w-full text-gray-700 hover:bg-gray-200 hover:text-gray-900'>
                Selection Sort
              </button>
            </Link>
            <Link to='/insertionsort'>
              <button className='block text-left px-4 py-2 w-full text-gray-700 hover:bg-gray-200 hover:text-gray-900'>
                Insertion Sort
              </button>
            </Link>
            <Link to='/heapsort'>
              <button className='block text-left px-4 py-2 w-full text-gray-700 hover:bg-gray-200 hover:text-gray-900'>
                Heap Sort
              </button>
            </Link>
            <Link to='/quicksort'>
              <button className='block text-left px-4 py-2 w-full text-gray-700 hover:bg-gray-200 hover:text-gray-900'>
                Quick Sort
              </button>
            </Link>
            <Link to='/mergesort'>
              <button className='block text-left px-4 py-2 w-full text-gray-700 hover:bg-gray-200 hover:text-gray-900'>
                Merge Sort
              </button>
            </Link>
          </div>
        </div>
      );
    }
  };

  return (
    <nav
      className={`bg-${bgColor}-500 flex items-center h-16 realtive shawdow-sm`}
    >
      <Link
        to='/'
        className='ml-5 justify-start items-center inline-flex justify-center rounded-md 
                    shadow-sm bg-gray-600 text-gray-200 px-4 py-1 focus:outline-none hover:bg-gray-700'
      >
        <button>Home</button>
      </Link>
      <div className='relative inline-block text-left ml-5'>
        <button
          onClick={() => {
            setShowList(!showList);
          }}
          type='button'
          className='items-center inline-flex justify-center rounded-md 
                    shadow-sm bg-gray-600 text-gray-200 px-4 py-1 focus:outline-none hover:bg-gray-700'
          id='options-menu'
          aria-haspopup='true'
          aria-expanded='true'
        >
          Algorithms
          <svg
            className='-mr-1 ml-2 h-5 w-5'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path
              fillRule='evenodd'
              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        {renderList()}
      </div>
    </nav>
  );
};

export default Header;
