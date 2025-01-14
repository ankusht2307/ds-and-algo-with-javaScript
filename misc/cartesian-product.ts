/**
 * Problem: Given two finite non-empty sets, find their Cartesian Product.
 *
 * In mathematics, the Cartesian Product of two sets A and B, denoted A × B,
 * is the set of all ordered pairs (a, b) where a is in A and b is in B.
 *
 * Example:
 *
 * Set A = [1, 2]
 * Set B = [3, 4]
 *
 * Cartesian Product = [(1, 3), (1, 4), (2, 3), (2, 4)]
 */

const cartesianProduct = (arr1: number[], arr2: number[]) => {
  const result: number[][] = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }

  return result;
};

const a = [1, 2];
const b = [3, 4, 5];

console.log(cartesianProduct(a, b));

// Big O: O(m * n)
