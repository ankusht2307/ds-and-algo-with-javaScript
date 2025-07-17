/**
 * Searches for a target value in a 2D sorted array.
 * Starts from the top-right corner and moves left or down based on comparison.
 * Returns the [row, col] of the target if found, otherwise [-1, -1].
 * Time Complexity: O(n + m) where n = rows, m = columns
 *
 * @param {number[][]} arr - 2D sorted array to search in.
 * @param {number} target - Value to search for.
 * @returns {number[]} - [row, col] if found, otherwise [-1, -1].
 */
const search = (arr, target) => {
  let row = 0;
  let col = arr.length - 1; // Start from the last column of the first row

  while (row < arr.length && col >= 0) {
    if (arr[row][col] === target) {
      return [row, col]; // Target found
    }

    if (target > arr[row][col]) {
      row++; // Move down to next row
    } else {
      col--; // Move left to previous column
    }
  }

  return [-1, -1]; // Target not found
};

const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

console.log(search(arr, 8));


