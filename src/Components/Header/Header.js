import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
  return (
    <div>
      <nav>
        <ul className='flex justify-center h-10 items-center bg-cyan-300 text-fuchsia-400 font-semibold'>
          <li><CustomLink to='/home'>HOME</CustomLink></li>
          <li><CustomLink to='/reviews'>REVIEWS</CustomLink></li>
          <li><CustomLink to='/dashboard'>DASHBOARD</CustomLink></li>
          <li><CustomLink to='/blogs'>BLOGS</CustomLink></li>
          <li><CustomLink to='/about'>ABOUT</CustomLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;