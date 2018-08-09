import React from 'react';
import ReactDOM from 'react-dom';
import FibonacciScreen from './Component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FibonacciScreen />, div);
  ReactDOM.unmountComponentAtNode(div);
});
