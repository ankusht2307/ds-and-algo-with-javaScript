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
  let left = 0;
  let right = arr.length - 1;
  const isAscending = arr[left] < arr[right];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (isAscending) {
      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (arr[mid] < target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return -1;
};

// Test cases
console.log(orderAgnosticBS([1, 3, 5, 7, 9], 5)); // Expected output: 2 (ascending order)
console.log(orderAgnosticBS([9, 7, 5, 3, 1], 5)); // Expected output: 2 (descending order)
