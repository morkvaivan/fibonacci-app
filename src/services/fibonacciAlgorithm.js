/**
 * Calculate fibonacci number at specific position using Dynamic Programming approach.
 *
 * @param {number} number
 * @return {number}
 */
export default function fibonacciNth(number) {
  let prev = 0, next = 1, current;

  if (number === 0) {
    return prev;
  }
  
  for (let i = 2; i <= number; i++) {
    current = prev + next;
    prev = next;
    next = current;
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
