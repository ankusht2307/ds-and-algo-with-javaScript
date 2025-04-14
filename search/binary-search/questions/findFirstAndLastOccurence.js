/**
 * Problem: Find First and Last Position of Element in Sorted Array
 * You are given a sorted array of integers nums and an integer target.
 *
 * Write a function to return the starting and ending position of a given target value.
 * If the target is not found in the array, return [-1, -1].
 * You must write an algorithm with O(log n) runtime complexity.
 *
 *
 * Example:
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 *
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 *
 * Input: nums = [], target = 0
 * Output: [-1,-1]
 *
 */

function search(arr, target, findStartElement) {
  let start = 0;
  let end = arr.length - 1;
  let index = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] < target) {
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      index = mid;
      if (findStartElement) {
        end = mid - 1;
      } else {  
        start = mid + 1;
      }
    }
  }

  return index;
}

const findFirstAndLastOccurence = (arr, target) => {
  const firstElement = search(arr, target, true);
  const secondElement = search(arr, target, false);

  return [firstElement, secondElement];
};

const arr = [5, 7, 7, 7, 7, 8, 8, 10];
const target = 7;

console.log(findFirstAndLastOccurence(arr, target));
