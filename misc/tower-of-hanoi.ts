/**
 * Tower of Hanoi is a classic problem where you have three rods and n disks of different sizes which can slide onto any rod.
 * The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest at the top, thus making a conical shape.
 * The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:
 * 1. Only one disk can be moved at a time.
 * 2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.
 * 3. No disk may be placed on top of a smaller disk.
 */

const towerOfHanoi = (
  n: number,
  fromRod: string,
  toRod: string,
  usingRod: string
) => {
  if (n === 1) {
    console.log(`moved disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
};

towerOfHanoi(3, "A", "B", "C");

// Big O: 2^n
