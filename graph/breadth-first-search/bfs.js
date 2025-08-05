/**
 * Printout all elements in graph using
 * breadth first search
 *
 * @param {Object} graph
 * @param {String} srcNode
 */

const breadthFirstSearchPrint = (graph, srcNode) => {
  const queue = [srcNode];

  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);

    for (let neighbour of graph[current]) {
      queue.push(neighbour);
    }
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

breadthFirstSearchPrint(graph, "a");
