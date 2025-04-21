// https://leetcode.com/problems/find-in-mountain-array/description/

/**
 * Problem statement: 1095. Find in Mountain Array
 * Given a mountain array mountainArr, return the
 * minimum index such that mountainArr.get(index) == target. If such an index does not exist, return -1.
 *
 *
 * Example:
 * Input: mountainArr = [1,2,3,4,5,3,1], target = 3
 * Output: 2
 * Explanation: 3 exists in the array, at index=2 and index=5. Return the minimum index, which is 2.
 *
 * Input: mountainArr = [0,1,2,4,2,1], target = 3
 * Output: -1
 * Explanation: 3 does not exist in the array, so we return -1.
 *
 */

const findPeakElement = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
};

const orderAgnosticBinarySearch = (arr, start, end, target, isAscending) => {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (isAscending) {
      if (arr[mid] < target) {
        start = mid + 1;
      } else if (arr[mid] > target) {
        end = mid - 1;
      } else {
        return mid;
      }
    } else {
      if (arr[mid] > target) {
        start = mid + 1;
      } else if (arr[mid] < target) {
        end = mid - 1;
      } else {
        return mid;
      }
    }
  }

  return -1;
};

const findInMountain = (arr, target) => {
  const peakIndex = findPeakElement(arr);
  let elementIndex;

  //find in ascending part
  elementIndex = orderAgnosticBinarySearch(arr, 0, peakIndex, target, true);

  if (elementIndex === -1) {
    elementIndex = orderAgnosticBinarySearch(
      arr,
      peakIndex,
      arr.length - 1,
      target,
      false
    );
  }

  return elementIndex;
};

const arr = [1, 2, 3, 4, 5, 3, 1];
const target = 3;

const elementIndex = findInMountain(arr, target);
console.log(elementIndex);
