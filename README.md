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

#### Common object operations

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

### Set
- A set is a data structure that can hold a collection of values. The values
  however must be unique.
- Set can contain a mix of different data types. You can store strings, booleans,
  numbers or even objects all in the same set.
- Sets are dynamically sized. You don't have to declare the size of a set before
  creating it.
- Sets do not maintain insertion order.
- Sets are iterables. They can be used with for of loop.

### Set vs Array
- Arrays can contain duplicate values whereas Sets cannot.
- Insertion order is maintained in arrays but it is not the
  case with sets.
- Searhing and deleting and element in the set is faster compared
  to arrays.

#### Common set operation

```
const set = new Set([1, 2, 3, 4, 5]);
```

#### Accessing set values

```
console.log(set.has(1)) => true
```

```
for (const item of set) {
  console.log(item)
}

Output: 1
        2
        3
```

#### Deleting values

```
console.log(set.size) => 5

set.delete(1)

console.log(set.size) => 4
```

```
console.log(set.size) => 4

set.clear()

console.log(set.size) => 0
```

### Maps

- A map is an unordered collection of key-value pairs. Both keys and values
  can be of any data type.
- To retrieve a value, you can use the corresponding key.
- Maps are iterables. They can be used with for of loop.

### Object vs Map

- Objects are unordered whereas maps are ordered.
- Keys is onjects can only be string or symbol whereas is maps, they can be of any type.
- An object has a prototype and may contain a few default keys which may collide with your
  own keys if you're not careful. A map on the other hand does not contain any keys by default.
- Objects are not iterables whereas maps are iterables.
- The number of items in an object must be determined manually whereas it is readily available
  with the size property in a map.
- Apart from storing data, you can attach functionality to an object whereas maps are restricted
  just storing data.

#### Common Map operations

```
const map = new Map([[1,2], ['key', 'value'], [null, undefined], [true, false], ['1',2]])
```

#### Accessing Map values

```
console.log(map.has(1)) => true
```

```
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

Output:

1: 2
key: value
null: undefined
true: false
1: 2
```

#### Deleting values

```
console.log(map.size) => 5

map.delete(1)

console.log(map.size) => 4
```

```
console.log(map.size) => 4

map.clear()

console.log(map.size) => 0
```

## Custom Data Structures

### Stacks

- The stack data structure is a sequential collection of elements that follows the principle of
  `Last In First Out` (LIFO).
- The last element inserted into the is the first element to be removed.
- A stack of plates. The last plate placed on the top of the stack is also the first plate removed
  from the stack.
- Stack is an abstract data type. It is defined by its behaviour rather than being a mathematical modal.
- The Stack data structure supports two main operations.
  - Push, which adds an element to the collection.
  - Pop, which removes the most recently added element from the collection.

![Stack](https://cdn.programiz.com/sites/tutorial2program/files/stack.png)

#### Stack Usage

- Typically Stack is great when we want to trace back steps.

##### Some examples
- Browser history tracking.
- Undo operation when typing.
- Expression conversion - Infix to Postfix.
- Call Stack in JavaScript runtime.

### Queues
### Circular Queue
### Linked List
### Hash Table
### Trees
### Graphs
