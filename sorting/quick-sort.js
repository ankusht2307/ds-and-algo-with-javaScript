/**
 * Problem statement: Given an array of integer elements, sort the array
 * elements in acsending order.
 * [4, -1, 7, 2, 19] => [-1, 2, 4, 7, 19]
 *
 * Hint: For quick sort we find pivot.
 */

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  const leftArray = [];
  const rightArray = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArray.push(arr[i]);
    } else {
      rightArray.push(arr[i]);
    }
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
};

const arr = [4, -1, 7, 2, 19]; // [ -1, 2, 4, 7, 19 ]
console.log(quickSort(arr));

/**
 * Big O:
 *
 * Avg. case: O(n^2)
 *
 * worst case: O(nlogn)
 */
