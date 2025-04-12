/**
 * Problem: Given an string and a target character 't'. Find the index of 't'
 * in the string. Return -1 if the target character is not found.
 *
 * str = 'test', t = s => should return 2
 *
 */

const search = (string, character) => {
  if (string.length < 1) return -1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) return i;
  }
  return -1;
};

const index = search("stellar", "q");

console.log(index);
