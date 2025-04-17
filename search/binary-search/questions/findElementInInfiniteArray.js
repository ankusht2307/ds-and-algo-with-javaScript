/**
 * Problem statement: Given an infinite sorted array of numbers.
 * Find out the index of given target element.
 *
 * Example:
 * Input: arr = [1, 3, 6, 8, 10, 14, ....], target = 14
 * Output: 5 (index of 14)
 *
 */

const findElement = (arr, target) => {
  let start = 0;
  let end = 1;

  while (arr[end] < target) {
    let currentStart = end + 1;
    end = end + (end - start + 1) * 2;
    start = currentStart;
  }

  return search(arr, target, start, end);
};

const search = (arr, target, start, end) => {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] < target) {
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
};

const arr = [1, 3, 6, 8, 10, 14, 15, 18, 23, 24, 25, 26, 27, 28, 29, 30];
const target = 18;

const element = findElement(arr, target);
console.log(element);
