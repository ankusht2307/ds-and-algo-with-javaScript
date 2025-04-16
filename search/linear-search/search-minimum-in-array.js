/**
 * Problem: Given an array of 'n' elements. Find and return the
 * minimum number in the array with given range.
 *
 * arr = [-5, 2, 10, 4, 6], start = 2, end = 4 , should return 4
 *
 */

const searchMinimum = (arr, start, end) => {
  if (arr.length === 0) return -1;

  let temp = arr[start];
  for (let i = start; i < end; i++) {
    if (temp > arr[i]) temp = arr[i];
  }
  return temp;
};

const min = searchMinimum([1, 34, 74, 982, 0, 5, 7], 0, 3);
console.log(min);
