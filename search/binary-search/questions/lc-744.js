// Problem statement: https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/

const nextGreatestLetter = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  if (arr[arr.length - 1] <= target) return arr[0];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] <= target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return arr[start];
};

const arr = ["c", "f", "j"];
const target = "c";

const answer = nextGreatestLetter(arr, target);
console.log(answer);
