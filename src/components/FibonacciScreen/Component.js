import React from 'react';
import PropTypes from 'prop-types';

import './Component.css';

const title = 'Your fibonacci number:';

const FibonacciScreen = ({ fibonacciNumber }) => (
  <div>
    {`${title} ${fibonacciNumber}`}
  </div>
);

FibonacciScreen.propTypes = {
  fibonacciNumber: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default FibonacciScreen;
