import React from 'react';

import logo from './logo.svg';
import './Component.css';

const title = 'Welcome to the Fibonacci Sequence service!';

const Header = () => (
  <header className="Header">
    <img
      src={logo}
      className="Header-logo"
      alt="logo"
    />
    <h1 className="Header-title">
      {title}
    </h1>
  </header>
);

export default Header;
