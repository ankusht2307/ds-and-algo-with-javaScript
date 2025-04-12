/**
 * Problem Statement: https://leetcode.com/problems/find-numbers-with-even-number-of-digits/description/
 */

const find = (array) => {
  let numWithEvenDigits = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].toString().length % 2 === 0) {
      numWithEvenDigits++;
    }
  }

  return numWithEvenDigits;
};

const arr = [2, 2673, 98223, 7823, 22, 311, 53];

const num = find(arr);
console.log(num);
