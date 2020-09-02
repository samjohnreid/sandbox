import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="main-nav">
        <ul>
          <li><a href="http://bbc.co.uk/">[ Link ]</a></li>
          <li><Link to="/">[ home ]</Link></li>
          <li><Link to="/blog">[ blog ]</Link></li>
          <li><a href="http://bbc.co.uk/">[ Link ]</a></li>
          <li><a href="http://bbc.co.uk/">[ Link ]</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;