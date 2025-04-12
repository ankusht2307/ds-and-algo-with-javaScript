/**
 * Problem: Given an 2D array of 'n' elements and target. Find and return the
 * index of the target element.
 *
 * arr = [
 *       [2, 43, 1, 6],
 *       [3, 56, 43],
 *       [90, 87, 43, 32],
 * ];
 *
 * target = 1
 *
 * should return [0, 2]
 *
 */

const search = (arr, target) => {
  if (arr.length < 1) return -1;
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (arr[row][col] === target) return [row, col];
    }
  }
  return -1;
};

const arr = [
  [2, 43, 1, 6],
  [3, 56, 43],
  [90, 87, 43, 32],
];

const index = search(arr, 32);
console.log(index);
