class FibonacciNth {
  /**
   * Calculate fibonacci number at specific position using Dynamic Programming approach.
   *
   * Time Complexity:
   * O(n), where n is ...
   * 
   * Space Complexity:
   * O(1)
   * 
   * @param {number} number
   * @return {number}
   */
  computeFibonacciNumber(number) {
    let prev = 0, next = 1, buf;
  
    if (number === 0) {
      return prev;
    }
    
    for (let i = 2; i <= number; i++) {
      buf = prev + next;
      prev = next;
      next = buf;
    }
  
    return next;  
    //   let previousValue = 0, currentValue = 1;

    //   if (number === 0) {
    //     return previousValue;
    //   }
      
    //   for (let iterationsCounter = 2; iterationsCounter <= number; iterationsCounter++) {
    //     currentValue += previousValue;
    //     previousValue = currentValue - previousValue;
    //   }
    
    //   return currentValue;
  }
}

export default FibonacciNth;
