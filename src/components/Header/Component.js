import React from 'react';

import logo from './logo.svg';
import './Component.css';

const headerContent = 'Welcome to the Fibonacci Sequence service!';

const Header = () => (
  <header
    className="Header"
  >
    <img
      src={logo}
      className="Header-logo"
      alt="logo"
    />
    <h1
      className="Header-title"
    >
      {headerContent}
    </h1>
  </header>
);

export default Header;
