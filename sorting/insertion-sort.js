/**
 * Problem statement: Given an array of integer elements, sort the array
 * elements in acsending order.
 * [4, -1, 7, 2, 19] => [-1, 2, 4, 7, 19]
 */

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
};

const arr = [4, -1, 7, 2, 19, 1, 3];
insertionSort(arr);
console.log(arr);

// Big O: O(n^2)
