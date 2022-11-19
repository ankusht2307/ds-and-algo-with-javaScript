# dataStructures-with-javaScript

## Built In Data Structures

### Array
- An array is a data structure that can hold a collection of values.
- Arrays can contain a mix of different data types. you can store strings, booleans,
  numbers or even objects all in the same array.
- Array are resizable. You don't have to declare the size of an array before 
  creating it.
- JavaScript arrays are zero-indexed and the insertion order is maintained.
- Arrays are iterables. They can be used with a for of loop.

#### Example

Array can hold all data types.

```bash
const values = ['a', 1, true, false, null, undefined, 0, '', ' '];
```

Common Array operations.
```
const superHeroes = ['Thor', 'Ironman', 'Superman'];
```

Add element at the begining of the array.

```
superHeroes.unshift('Spiderman') => ['Spiderman', 'Thor', 'Ironman', 'Superman']
```

Delete element from front of the array.

```
superHeroes.shift() => ['Thor', 'Ironman', 'Superman']
```

Add element at the end of the array.

```
superHeroes.push('Captain America') => ['Thor', 'Ironman', 'Superman', 'Captain America']
```

Delete element from end of the array.

```
superHeroes.pop() => ['Spiderman', 'Thor', 'Ironman']
```

Other array methods:

- map
- reduce
- filter
- concat
- slice
- spice

#### Array Big O time complexity 

- Insert / Remove from end - `O(1)`
- Insert / Remove from begining - `O(n)`
- Access elememt - `O(1)`
- Search - `O(n)`
- Push / Pop - `O(1)`
- Shift / Unshift / Concat / Slice / Splice - `O(n)`
- forEach / map / filter / reduce - `O(n)`

### Objects
### Sets
### Maps

## Custom Data Structures

### Stacks
### Queues
### Circular Queue
### Linked List
### Hash Table
### Trees
### Graphs
