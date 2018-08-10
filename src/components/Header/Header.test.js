import React from 'react';
import { shallow } from 'enzyme';

import Header from './Component';

it('renders without crashing', () => {
  shallow(<Header />);
});
