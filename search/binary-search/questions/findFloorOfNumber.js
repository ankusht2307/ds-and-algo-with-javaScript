/**
 * Problem Statement:
 * Given a sorted array of numbers and a target number, find the floor of the target number.
 * The floor of a number is defined as the largest number in the array that is smaller than or equal to the target number.
 *
 * Example:
 * Input: arr = [1, 3, 6, 8, 10, 14], target = 14
 * Output: 4 (index of 10)
 *
 * Input: arr = [1, 3, 6, 8, 10, 14], target = 7
 * Output: 2 (index of 6, which is the floor of 7)
 *
 */

const findFloorOfNumber = (array, target) => {
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

  return end;
};

const arr = [1, 3, 6, 8, 10, 14];
const target = 5;
const answer = findFloorOfNumber(arr, target);
console.log(answer);
