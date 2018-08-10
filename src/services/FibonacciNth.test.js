import FibonacciNth from './FibonacciNth';

describe('FibonacciNth', () => {
  const fibonacci = new FibonacciNth();

  it('should calculate fibonacci correctly', () => {
    expect(fibonacci.computeFibonacciNumber(1)).toBe(1);
    expect(fibonacci.computeFibonacciNumber(2)).toBe(1);
    expect(fibonacci.computeFibonacciNumber(3)).toBe(2);
    expect(fibonacci.computeFibonacciNumber(4)).toBe(3);
    expect(fibonacci.computeFibonacciNumber(5)).toBe(5);
    expect(fibonacci.computeFibonacciNumber(6)).toBe(8);
    expect(fibonacci.computeFibonacciNumber(7)).toBe(13);
    expect(fibonacci.computeFibonacciNumber(8)).toBe(21);
    expect(fibonacci.computeFibonacciNumber(12)).toBe(144);
    expect(fibonacci.computeFibonacciNumber(16)).toBe(987);
    expect(fibonacci.computeFibonacciNumber(18)).toBe(2584);
    expect(fibonacci.computeFibonacciNumber(20)).toBe(6765);
  });
});
