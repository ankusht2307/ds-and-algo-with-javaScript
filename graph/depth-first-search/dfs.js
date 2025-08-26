/**
 * Printout all elements in graph using
 * depth first search
 *
 * @param {Object} graph
 * @param {String} srcNode
 */

const depthFirstSearchPrint = (graph, srcNode) => {
  const stack = [srcNode];

  while (stack.length > 0) {
    const current = stack.pop();

    console.log(current);

    for (let neighbour of graph[current]) {
      stack.push(neighbour);
    }
  }
};

const recursiveDepthFirstSearchPrint = (graph, srcNode) => {
  console.log(srcNode);

  for (let neighbour of graph[srcNode]) {
    recursiveDepthFirstSearchPrint(graph, neighbour);
  }
};

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

console.log("===traversal===");
depthFirstSearchPrint(graph, "a");
console.log("===recursiveTraversal===");
recursiveDepthFirstSearchPrint(graph, "a");
