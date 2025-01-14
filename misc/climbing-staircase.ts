/**
 * Problem: Given a staircase of 'n' steps, count the number of distinct ways to climb
 * to the top.
 * You can either climb 1 step or 2 steps at a time.
 *
 * n=1, climbingStaircase(1) => 1 steps => (1)
 * n=2, climbingStaircase(2) => 2 steps => (1,1) and (2,2)
 * n=3, climbingStaircase(3) => 3 steps => (1,1,1) (1,2) and (2,1)
 * n=4, climbingStaircase(4) => 5 steps => (1,1,1,1), (1,1,2), (2,2), (2,1,1), (1,2,1)
 *
 */

const climbStaircase = (n: number) => {
  const numberOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    numberOfWays[i] = numberOfWays[i - 1] + numberOfWays[i - 2];
  }

  return numberOfWays[n - 1];
};

console.log(climbStaircase(1));
console.log(climbStaircase(2));
console.log(climbStaircase(3));
console.log(climbStaircase(4));
