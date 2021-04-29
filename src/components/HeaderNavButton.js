import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';

//had to use the 'function' keyword here because of a strange bug with react-onclickoutside package
function HeaderNavButton() {
  const [showList, setShowList] = useState(false);

  HeaderNavButton.handleClickOutside = () => setShowList(false);

  const renderList = () => {
    if (showList) {
      return (
        <div
          className='origin-top-right absolute left-0 mt-1
                    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10'
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
            <Link to='/shellsort'>
              <button className='block text-left px-4 py-2 w-full text-gray-700 hover:bg-gray-200 hover:text-gray-900'>
                Shell Sort
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
          </div>
        </div>
      );
    }
  };

  return (
    <div className='relative inline-block text-left mx-5'>
      <button
        onClick={() => {
          setShowList(!showList);
        }}
        type='button'
        className='items-center inline-flex justify-center rounded-md 
                    shadow-sm bg-gray-700 text-gray-100 px-4 py-1 focus:outline-none focus:bg-gray-700 hover:bg-gray-800'
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
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => HeaderNavButton.handleClickOutside,
};

export default onClickOutside(HeaderNavButton, clickOutsideConfig);
