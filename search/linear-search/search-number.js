/**
 * Problem: Given an array of 'n' elements and a target element 't'. Find the index of 't'
 * in the array. Return -1 if the target element is not found.
 *
 * arr = [-5, 2, 10, 4, 6], t = 10 => should return 2
 * arr = [-5, 2, 10, 4, 6], t = 6 => should return 4
 *
 */

const ls = (arr, target) => {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};

console.log(ls([-5, 2, 10, 4, 6], 6));

// Big-O: O(n)
