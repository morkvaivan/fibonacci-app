import React from 'react';

import './Component.css';

const title = 'Your fibonacci number:';

const FibonacciScreen = ({ fibonacciNumber }) => (
  <div>
    {`${title} ${fibonacciNumber}`}
  </div>
);

export default FibonacciScreen;
