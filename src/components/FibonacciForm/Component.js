import React, { Component } from 'react';

import './Component.css';

class FibonacciForm extends Component {
  constructor() {
    super();

    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const positiveInteger = Math.abs(parseInt(this.state.value, 10));
    console.log('positiveInteger:', positiveInteger);

    this.props.onSubmit(positiveInteger);

    this.setState({
      value: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        
        <label>
          Enter your input to get its Fibonacci number:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}

export default FibonacciForm;
