import React from 'react';
import { shallow } from 'enzyme';
import FibonacciScreen from './Component';

it('renders without crashing', () => {
  shallow(<FibonacciScreen fibonacciNumber="" />);
});
