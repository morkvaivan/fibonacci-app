import React from 'react';
import { shallow } from 'enzyme';

import FibonacciForm from './Component';

describe('FibonacciForm', () => {
  let wrapper;

  const validTestValue = {
    preventDefault: () => {},
    target: {
      name: 'number',
      value: '123',
    }
  };
  
  beforeEach(() => {
    wrapper = shallow(<FibonacciForm onSubmit={jest.fn()} />);
  });

  it('renders without crashing', () => {
    shallow(<FibonacciForm onSubmit={() => {}} />);
  });

  it('handleInputChange should work properly', () => {
    wrapper = shallow(<FibonacciForm onSubmit={() => {}} />);
    const instance = wrapper.instance()
    
    const numberInitValue = '';
    const numberExpectedValue = validTestValue.target.value;

    expect(instance.state.number).toBe(numberInitValue);
    
    instance.handleInputChange(validTestValue);

    expect(instance.state.number).toBe(numberExpectedValue);
  });

  it('handleSubmit should call onSubmit prop when value is valid', () => {
    const instance = wrapper.instance();
    
    const numberExpectedValue = validTestValue.target.value;

    instance.handleInputChange(validTestValue);
    instance.handleSubmit(validTestValue);

    expect(instance.props.onSubmit).toBeCalled()
    expect(instance.props.onSubmit).toBeCalledWith(numberExpectedValue);
  });

  it('handleSubmit should not call onSubmit prop when value is not valid', () => {
    const instance = wrapper.instance()

    const testValue = {
      preventDefault: () => {},
      target: {
        name: 'number',
        value: 'notValidValue',
      }
    };

    instance.handleInputChange(testValue);
    instance.handleSubmit(testValue);

    expect(instance.props.onSubmit).not.toBeCalled();
  });
});
