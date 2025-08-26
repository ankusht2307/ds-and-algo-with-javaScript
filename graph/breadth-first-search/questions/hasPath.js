/*
  Problem: Has Path in Directed Acyclic Graph (DAG)

  You are given a directed graph represented as an adjacency list.
  The graph has no cycles (i.e., it is a Directed Acyclic Graph).

  Write a function `hasPath(graph, source, destination)` that determines 
  whether there exists a path from the `source` node to the `destination` node.

  Parameters:
    - graph: An object where each key is a node and the corresponding value 
             is an array of neighboring nodes.
    - source: The starting node.
    - destination: The target node.

  Return:
    - true if a path exists from source to destination, false otherwise.

  Example:
    const graph = {
      a: ['b', 'c'],
      b: ['d'],
      c: [],
      d: ['e'],
      e: []
    };

    hasPath(graph, 'a', 'e'); // true
    hasPath(graph, 'c', 'e'); // false
    hasPath(graph, 'd', 'e'); // true
    hasPath(graph, 'e', 'a'); // false
*/

const hasPath = (graph, srcNode, dstNode) => {
  const queue = [srcNode];

  while (queue.length > 0) {
    const currentNode = queue.shift();

    if (currentNode === dstNode) return true;

    for (let neighbour of graph[currentNode]) {
      queue.push(neighbour);
    }
  }

  return false;
};

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: [],
  d: ["e"],
  e: [],
};

console.log(hasPath(graph, "a", "e")); // => true
console.log(hasPath(graph, "c", "e")); // => false
console.log(hasPath(graph, "d", "e")); // => true
console.log(hasPath(graph, "e", "a")); // => false
