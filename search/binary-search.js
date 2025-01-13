/**
 * Problem: Given an sorted array of 'n' elements and a target element 't'. Find the index of 't'
 * in the array. Return -1 if the target element is not found.
 *
 * arr = [1,2,4,6,8,9,11], t = 4 => should return 2
 * arr = [1,2,4,6,8,9,11], t = 6 => should return 3
 *
 */

const bs = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
};

console.log(bs([1, 2, 4, 6, 8, 9, 11], 1)); // 0
console.log(bs([1, 2, 4, 6, 8, 9, 11], 11)); // 6
console.log(bs([1, 2, 4, 6, 8, 9, 11], 0)); // -1

// Big-O: O(logn)

const recursiveBs = (
  arr,
  target,
  startIndex = 0,
  endIndex = arr.length - 1
) => {
  if (startIndex > endIndex) return -1;

  let midIndex = Math.floor((startIndex + endIndex) / 2);

  if (target === arr[midIndex]) {
    return midIndex;
  }

  if (target > arr[midIndex]) {
    startIndex = midIndex + 1;
  } else {
    endIndex = midIndex - 1;
  }

  return recursiveBs(arr, target, startIndex, endIndex);
};

console.log("=====recursive Solution");
console.log(recursiveBs([1, 2, 4, 6, 8, 9, 11], 0)); // -1
console.log(recursiveBs([1, 2, 4, 6, 8, 9, 11], 2)); // 1
console.log(recursiveBs([1, 2, 4, 6, 8, 9, 11], 11)); // 6

// Big O: O(logn)