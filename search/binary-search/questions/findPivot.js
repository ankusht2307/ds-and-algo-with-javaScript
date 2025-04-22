/**
 * Problem statement: Find pivot in a rotated sorted array
 *
 * Given a rotated sorted array of distinct integers, find the index of the pivot element.
 * A pivot element is the point where the array is rotated, i.e., the element after which
 * the array is no longer in descending order.
 *
 * Example:
 * Input: arr = [6,7,8,1,2,3,4,5]
 * Output: 2 (index of element 8, which is the last element before rotation)
 *
 * Note:
 * - The array is guaranteed to be rotated
 * - All elements are distinct
 * - If the array is not rotated, return -1
 */

const findPivot = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (mid < end && arr[mid] > arr[mid + 1]) {
      return mid;
    }

    if (mid > start && arr[mid] < arr[mid - 1]) {
      return mid - 1;
    }

    if (arr[start] >= arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
};

const arr = [10, 11, 12, 1, 2, 3, 4, 5, 6];
const pivotIndex = findPivot(arr);
console.log(pivotIndex);
