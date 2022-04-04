import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/home'>HOME</Link></li>
          <li><Link to='/reviews'>REVIEWS</Link></li>
          <li><Link to='/dashboard'>DASHBOARD</Link></li>
          <li><Link to='/blogs'>BLOGS</Link></li>
          <li><Link to='/about'>ABOUT</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;