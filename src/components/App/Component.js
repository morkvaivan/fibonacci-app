import React, { Component } from 'react';

import Header from '../Header';
import Footer from '../Footer';
import FibonacciForm from '../FibonacciForm';
import FibonacciScreen from '../FibonacciScreen';

import computeFibonacciNumber from '../../services/fibonacciAlgorithm';

import './Component.css';

class App extends Component {
  constructor() {
    super();

    this.state = { fibonacciNumber: 0 };
  }

  /**
   *
   * @param {number} validNumber
   * @return {void}
   */
  handleFormSubmit = (validNumber) => {
    const t0 = performance.now();

    const fibonacciNumber = computeFibonacciNumber(validNumber);
    
    const t1 = performance.now();
    console.log("Call to getFibonacciNumber took " + (t1 - t0) + " milliseconds.");
    
    this.setState({
      fibonacciNumber,
    });
  }

  render() {
    return (
      <div className="App">
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
