// https://leetcode.com/problems/peak-index-in-a-mountain-array/description/

/**
 * Problem statement: You are given an integer mountain array arr of length n 
 * where the values increase to a peak element and then decrease.
 * 
 * Return the index of the peak element.
 *
 * Example:
 * Input: arr = [0,1,0]
 * Output: 1
 *
 */

const bruteFindPeak = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return i;
    }
  }
};

const findPeak = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] < arr[mid + 1]) {
        start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
};

const arr = [1, 2, 3, 4, 2, 1, 0];
// const peakElement = bruteFindPeak(arr);
const peakElement = findPeak(arr);
console.log(peakElement);
