import React from 'react';

const Bar = ({ number, color, itemsAmount }) => {
  return (
    <div
      className='w-5 text-center border border-white flex flex-col-reverse'
      style={{
        height: (number * 20) / itemsAmount + 'rem',
        backgroundColor: !color ? '#b3b3cc' : color,
      }}
    >
      <span className='text-xs'>{number}</span>
    </div>
  );
};

export default Bar;
