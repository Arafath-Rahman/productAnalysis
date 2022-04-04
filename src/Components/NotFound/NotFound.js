import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center p-5'>
      <h1 className='text-2xl md:text-3xl lg:text-5xl text-red-500 font-bold mb-8'>Not Found - 404</h1>
      <img className='w-1/5 md:w-2/5 lg:w-3/5 rounded-lg' src={require('../../Asset/images/NotFound.jpg')} alt="not found img" />
    </div>
  );
};

export default NotFound;