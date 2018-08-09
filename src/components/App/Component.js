import React, { Component } from 'react';

import Header from '../Header';
import Footer from '../Footer';
import FibonacciForm from '../FibonacciForm';
import FibonacciScreen from '../FibonacciScreen';

import FibonacciNth from '../../services/FibonacciNth';

import { INITIAL_FIBONACCI_NUMBER_VALUE } from '../../constants';

import './Component.css';

class App extends Component {
  constructor() {
    super();

    this.fibonacci = new FibonacciNth();

    this.state = {
      fibonacciNumber: INITIAL_FIBONACCI_NUMBER_VALUE,
    };
  }

  /**
   *
   * @param {string} validInputValue
   * @return {void}
   */
  handleFormSubmit = (validInputValue) => {
    // const t0 = performance.now();

    const number = Number(validInputValue);
    const fibonacciNumber = this.fibonacci.computeFibonacciNumber(number);
    
    // const t1 = performance.now();
    // console.log("Call to getFibonacciNumber took " + (t1 - t0) + " milliseconds.");
    
    this.setState({
      fibonacciNumber,
    });
  }

  render() {
    return (
      <div
        className="App"
      >
        <Header />

        <FibonacciForm
          onSubmit={this.handleFormSubmit}
        />

        <FibonacciScreen
          fibonacciNumber={this.state.fibonacciNumber}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
