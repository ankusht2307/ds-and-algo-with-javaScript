/**
 * Problem Statement:
 * Given a sorted array of numbers and a target number, find the ceiling of the target number.
 * The ceiling of a number is defined as the smallest number in the array that is greater than or equal to the target number.
 *
 * Example:
 * Input: arr = [1, 3, 6, 8, 10, 14], target = 14
 * Output: 5 (index of 14)
 *
 * Input: arr = [1, 3, 6, 8, 10, 14], target = 7
 * Output: 3 (index of 8, which is the ceiling of 7)
 *
 */

const findCeilingOfNumber = (array, target) => {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === target) return mid;

    if (array[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start;
};

const arr = [1, 3, 6, 8, 10, 14];
const target = 3;
const answer = findCeilingOfNumber(arr, target);
console.log(answer);
