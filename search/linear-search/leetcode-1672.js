/**
 * Problem Statement: https://leetcode.com/problems/richest-customer-wealth/
 */

const maximumWealth = (accounts) => {
  let wealth = 0;
  for (let row = 0; row < accounts.length; row++) {
    let temp = 0;
    for (let col = 0; col < accounts[row].length; col++) {
      temp += accounts[row][col];
    }
    if (temp > wealth) wealth = temp;
  }

  return wealth;
};

const accounts = [
  [1, 2, 3, 4],
  [1, 2, 3],
  [9, 5],
];

console.log(maximumWealth(accounts));
