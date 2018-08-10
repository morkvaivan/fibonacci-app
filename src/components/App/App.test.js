import React from 'react';
import { shallow } from 'enzyme';

import App from './Component';

import Header from '../Header';
import Footer from '../Footer';
import FibonacciForm from '../FibonacciForm';
import FibonacciScreen from '../FibonacciScreen';

describe('App', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<App />);
    instance = wrapper.instance()
  });
  
  it('renders without crashing', () => {
    shallow(<App />);
  });
  
  it('renders one <Header /> component', () => {
    expect(wrapper.find(Header).length).toBe(1);
  });
  
  it('renders one <Footer /> component', () => {
    expect(wrapper.find(Footer).length).toBe(1);
  });
  
  it('renders one <FibonacciForm /> component', () => {
    expect(wrapper.find(FibonacciForm).length).toBe(1);
  });
  
  it('renders one <FibonacciScreen /> component', () => {
    expect(wrapper.find(FibonacciScreen).length).toBe(1);
  });
  
  it('handleFormSubmit should work properly', () => {
    instance.computeFibonacciNumberAsynchronously = jest.fn((number) => Promise.resolve(number));  
    
    const fibonacciNumberInitValue = '';
    const fibonacciNumberExpectedValue = 12;
    const loadingExpectedValue = false;
    const testValue = '12';
  
    expect(instance.computeFibonacciNumberAsynchronously).not.toBeCalled();
    expect(instance.state.fibonacciNumber).toBe(fibonacciNumberInitValue);
    expect(instance.state.loading).toBe(loadingExpectedValue);
  
    instance.handleFormSubmit(testValue);
  
    return Promise.resolve().then(() => {
      expect(instance.computeFibonacciNumberAsynchronously).toBeCalled();
      expect(instance.state.fibonacciNumber).toBe(fibonacciNumberExpectedValue);
      expect(instance.state.loading).toBe(loadingExpectedValue);
    });
  });
  
  it('computeFibonacciNumberAsynchronously should work properly', () => {
    const testValue = 12;
    const dataExpectedValue = 144;
  
    return instance.computeFibonacciNumberAsynchronously(testValue).then((data) => {
      expect(data).toBe(dataExpectedValue);
    });
  });
  
  it('does not render "Computing a Fibonacci Number ..." text when loading is false', () => {
    const textExpectedValue = '<Header /><FibonacciForm /><FibonacciScreen /><Footer />';
  
    expect(instance.state.loading).toBe(false);
    expect(wrapper.text()).toBe(textExpectedValue);  
  });
  
  it('renders "Computing a Fibonacci Number ..." text when loading is true', () => {
    const textInitValue = '<Header /><FibonacciForm /><FibonacciScreen /><Footer />';
    const textExpectedValue = '<Header /><FibonacciForm />Computing a Fibonacci Number ...<FibonacciScreen /><Footer />';
  
    expect(instance.state.loading).toBe(false);
    expect(wrapper.text()).toBe(textInitValue);
  
    instance.state.loading = true;
    instance.forceUpdate();
  
    expect(wrapper.text()).toBe(textExpectedValue);  
  });  
});
