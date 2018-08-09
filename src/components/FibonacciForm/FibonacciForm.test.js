import React from 'react';
import ReactDOM from 'react-dom';
import FibonacciForm from './Component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FibonacciForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
