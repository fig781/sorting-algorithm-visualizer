import { React } from 'react';
import { Link } from 'react-router-dom';
import HeaderNavButton from './HeaderNavButton';

const Header = ({ bgColor = 'gray' }) => {
  return (
    <nav className={`bg-${bgColor}-600 flex items-center h-16 justify-between sm:justify-start`}>
      <Link
        to='/'
        className='ml-5 justify-start items-center inline-flex justify-center rounded-md 
                    shadow-sm bg-gray-700 text-gray-100 px-4 py-1  hover:bg-gray-800'
      >
        <button className='focus:outline-none'>Home</button>
      </Link>
      <HeaderNavButton />
    </nav>
  );
};

export default Header;
