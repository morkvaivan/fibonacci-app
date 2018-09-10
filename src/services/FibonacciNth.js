class FibonacciNth {
  /**
   * Calculate fibonacci number at specific position using
   * Space Optimized Dynamic Programming approach.
   *
   * Time Complexity:
   * O(n)
   * 
   * Space Complexity:
   * O(1)
   * 
   * TODO: refactor to O(log n) implementation
   * 
   * @param {number} number
   * @return {number}
   */
  computeFibonacciNumber(number) {
    let previousValue = 0, currentValue = 1, temp;
  
    if (number === 0) {
      return previousValue;
    }
    
    for (let iterationsCounter = 2; iterationsCounter <= number; iterationsCounter++) {
      temp = previousValue + currentValue; 
      previousValue = currentValue;
      currentValue = temp;
    }
  
    return currentValue;
  }
}

export default FibonacciNth;
