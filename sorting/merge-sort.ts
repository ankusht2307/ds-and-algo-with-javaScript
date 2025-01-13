/**
 * Problem statement: Given an array of integer elements, sort the array
 * elements in acsending order.
 * [4, -1, 7, 2, 19] => [-1, 2, 4, 7, 19]
 *
 * Hint: For quick sort we divide each element into subarray and arrange them
 * accordingly.
 */

const merge = (leftArr: number[], rightArr: number[]) => {
  let sortedArray: number[] = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      const element = leftArr.shift();
      if (element) {
        sortedArray.push(element);
      }
    } else {
      const element = rightArr.shift();
      if (element) {
        sortedArray.push(element);
      }
    }
  }

  return [...sortedArray, ...leftArr, ...rightArr];
};

const mergeSort = (arr: number[]) => {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const array = [4, -1, 7, 2, 19];
console.log(mergeSort(array));

// Big O: O(nlogn)
