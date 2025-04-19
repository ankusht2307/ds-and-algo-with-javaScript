/**
 *
 * Problem: Order Agnostic Binary Search
 *
 * Description:
 *
 * Given a sorted array arr (which can be in ascending or descending order) and a target integer target,
 * write a function to return the index of target. If the target is not in the array, return -1.
 * Aim for an O(log n) solution.
 *
 * Input:
 * A sorted array arr (ascending or descending).
 * An integer target.
 *
 * Output:The index of target if found; otherwise, -1.
 *
 */

const orderAgnosticBS = (arr, target) => {
  if (arr && arr.length < 1) return -1;
  let start = 0;
  let end = arr.length - 1;
  const isAscending = arr[start] < arr[end];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) return mid;

    if (isAscending) {
      if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      if (arr[mid] < target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return -1;
};

// Test cases
console.log(orderAgnosticBS([1, 3, 5, 7, 9], 5)); // Expected output: 2 (ascending order)
console.log(orderAgnosticBS([9, 7, 5, 3, 1], 5)); // Expected output: 2 (descending order)
