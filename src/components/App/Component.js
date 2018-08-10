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
   * I call setState 2 times to show a user loading spinner
   * (for now it is just words) because when we compute a number
   * like `1000000000000` it takes a lot of time and the page is frozen.
   * To solve this problem in more advance way I would use multithreading
   * via Web Worker API but it needs more time.
   * 
   * Also it's good to add a spinner component and its functionality as a HOC.
   * 
   * To call setState 2 times in this method I've created
   * computeFibonacciNumberAsynchronously as async function.
   * 
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
