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
- An object is an unodered collection of key-value pairs. The key must either be
  a string or symbol data type whereas the value can be of any data type.
- To retrieve the value we can use the corresponding key. This is can used using
  dot notation or bracket notation.
- An object is not an iterable. We can't use it with a for loop.

Common object operations

```
const greet = {
    name: 'John Doe',
    message: 'Hi!',
    sayHi: function() {
        return `${this.message} ${this.name}`
    }
}
```

#### Accessing values

Dot notation
```
console.log(greet.name) => John Doe
```

Braket notation
```
console.log(greet['name']) => John Doe
```

Calling Methods
```
console.log(greet.sayHi()) => Hi! John Doe
```

Adding Properties
```
greet.age = 23;
console.log(greet.age) => 23
```

Deleting Properties
```
delete greet.age;
console.log(greet.age) => undefined
```

#### Other object methods:

- Object.values()
```
console.log(Object.values(greet)) => [ 'John Doe', 'Hi!', [Function: sayHi] ]
```

- Object.keys()
```
console.log(Object.keys(greet)) => [ 'name', 'message', 'sayHi' ]
```

- Object.entries()

```
console.log(Object.entries(greet)) => [
  [ 'name', 'John Doe' ],
  [ 'message', 'Hi!' ],
  [ 'sayHi', [Function: sayHi] ]
]
```

#### Array Big O time complexity 

- Insert - `O(1)`
- Remove - `O(1)`
- Access - `O(1)`
- Search - `O(n)`
- Object.values() - `O(n)`
- Object.keys() - `O(n)`
- Object.entries() - `O(n)`

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
