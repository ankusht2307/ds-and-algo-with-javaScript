/**
 * Problem: Given an array of 'n' elements and a target element 't'. Find the index of 't'
 * in the array with given range. Return -1 if the target element is not found.
 *
 * arr = [-5, 2, 10, 4, 6], start = 2, end = 4 ,t = 10 => should return 2
 *
 */

const search = (arr, target, start, end) => {
  if (arr.length < 1) return -1;
  for (let i = start; i < end; i++) {
    if (arr[i] === target) return i;
  }

  return -1;
};

const index = search([1, 2, 3, 4, 5], 4, 0, 4);
console.log(index);
