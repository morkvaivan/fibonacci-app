import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormValidator from '../../services/FormValidator';

import {
  INITIAL_INPUT_NUMBER_VALUE,
  MIN_POSITIVE_INTEGER,
} from '../../constants';

import './Component.css';

class FibonacciForm extends Component {
  constructor() {
    super();

    this.validator = new FormValidator([
      { 
        field: 'number', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Integer is required.' 
      },
      { 
        field: 'number',
        method: 'isInt',
        // args is an optional array of arguments that
        // will be passed to the validation method
        args: [{
          min: MIN_POSITIVE_INTEGER,
          allow_leading_zeroes: false,
        }],
        validWhen: true, 
        message: 'That is not a valid integer.'
      },
    ]);

    this.state = {
      number: INITIAL_INPUT_NUMBER_VALUE,
      validation: this.validator.valid(),
    };
  }

  /**
   * @param {SyntheticEvent} event 
   * @returns {void}
   */
  handleInputChange = (event) => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  /**
   * @param {SyntheticEvent} event 
   * @returns {void}
   */
  handleSubmit = (event) => {
    event.preventDefault();

    const validation = this.validator.validate(this.state);
    
    this.setState({ validation });

    if (validation.isValid) {
      this.props.onSubmit(this.state.number);

      this.setState({
        number: INITIAL_INPUT_NUMBER_VALUE,
      });
    }
  }

  render() {
    const validation = this.state.validation;

    const inputNumberPlaceholder = '12';
    const inputNumberLabel =
      'Submit your positive integer to get its Fibonacci number: ';
    const inputNumberWrapperClassName = validation.number.isInvalid
      ? 'input-number-wrapper has-error'
      : 'input-number-wrapper';

    return (
      <form
        onSubmit={this.handleSubmit}
      >  

        <div
          className={inputNumberWrapperClassName}
        >
          <label
            htmlFor="inputNumber"
          >
            {inputNumberLabel}
          </label>

          <input
            id="inputNumber"
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            placeholder={inputNumberPlaceholder}
          />

          <span
            className="help-block"
          >
            {validation.number.message}
          </span>
        </div>

        <input
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}

FibonacciForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FibonacciForm;
