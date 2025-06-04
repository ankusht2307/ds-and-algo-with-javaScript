// Problem statement: https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * Problem statement: Search in Rotated Sorted Array
 *
 * There is an integer array nums sorted in ascending order (with distinct values).
 *
 * Prior to being passed to your function, nums is possibly rotated at an unknown pivot
 * index k (1 <= k < nums.length) such that the resulting array is [nums[k],
 * nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
 * For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become
 * [4,5,6,7,0,1,2].Given the array nums after the possible rotation and an integer
 * target, return the index of target if it is in nums, or -1 if it is not in nums.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example:
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 *
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * Output: 1
 *
 * Input: nums = [1], target = 0
 * Output: -1
 *
 */

const search = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) return mid;

    if (arr[start] <= arr[mid]) {
      // search in LHS
      if (arr[start] <= target && target <= arr[mid]) {
        // target lies in LHS
        end = mid - 1;
      } else {
        // target lies in RHS
        start = mid + 1;
      }
    } else {
      // search in RHS
      if (arr[mid] <= target && target <= arr[end]) {
        // target lies in RHS
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
};

const arr = [4, 5, 6, 7, 0, 1, 2, 3];
const target = 40;

const element = search(arr, target);
console.log(element);
