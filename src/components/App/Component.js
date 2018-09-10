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
      loading: false,
    };
  }

  /**
   * @param {number} number 
   * @returns {Promise}
   */
  computeFibonacciNumberAsynchronously = (number) => new Promise(resolve => {
    setTimeout(() => {
      const fibonacciNumber = this.fibonacci.computeFibonacciNumber(number);
      resolve(fibonacciNumber);
    }, 100);
  });

  /**
   * @param {string} validInputValue
   * @return {void}
   */
  handleFormSubmit = (validInputValue) => {
    this.setState({
      loading: true,
    });

    const number = Number(validInputValue);

    this.computeFibonacciNumberAsynchronously(number)
      .then((fibonacciNumber) => {
        this.setState({
          fibonacciNumber,
          loading: false,
        });
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

        {this.state.loading ? <span>Computing a Fibonacci Number ...</span> : null }

        <FibonacciScreen
          fibonacciNumber={this.state.fibonacciNumber}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
