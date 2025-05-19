/**
 * Problem statement: Given an array of integer elements, sort the array
 * elements in acsending order.
 * [4, -1, 7, 2, 19] => [-1, 2, 4, 7, 19]
 */

const bubbleSort = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swapped = true;
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  } while (swapped);
};
const arr = [4, -1, 7, 2, 19, 3];
bubbleSort(arr);
console.log(arr);

// Big O: O(n^2)
