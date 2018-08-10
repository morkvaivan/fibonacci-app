/**
 * My thoughts about Large Fibonacci Numbers and using something like BigInteger in Java:
 * I started looking for alternatives in JavaScript and I found some userland libraries that emulate BigInt-like functionality and even
 * a new numeric primitive in JavaScript in Chrome. Because of trying to solve a problem in a cross-browser manner I tried to use
 * a library such as BigInteger.js to operate on large integers even beyond the safe integer limit for Numbers. But applying the BigInteger library
 * in solving the Fibonacci number problem is not really useful and, moreover, it decreases time performance. For example, after computing
 * input number as `10000` result is `Infinity` for BigInteger type and for number type as well or if we try to compute a number as `1000000000`
 * without BigInteger it takes time about ~1260-7247 milliseconds but with BigInteger it takes more than one minute and the result is the same `Infinity`.
 * Because of these observations, I decided not to use BigInteger library and use the Number type for numbers instead.
 * But I think we need to investigate it further.
 */
class FibonacciNth {
  /**
   * Calculate fibonacci number at specific position using
   * Space Optimized Dynamic Programming approach.
   *
   * Time Complexity:
   * O(n),
   * 
   * Space Complexity:
   * O(1)
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
