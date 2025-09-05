/**
 * Problem Statement: Has Path in Undirected Graph
 *
 * Write a function, undirectedPath, that takes in an array of edges for an
 * undirected graph and two nodes (nodeA, nodeB). The function should return a
 * boolean indicating whether or not there exists a path between nodeA and nodeB.
 *
 * Example:
 *  const edges = [
 *  ['i', 'j'],
 *  ['k', 'i'],
 *  ['m', 'k'],
 *  ['k', 'l'],
 *  ['o', 'n']
 * ];
 *
 * undirectedPath(edges, 'j', 'm'); // -> true
 *
 */

const hasPath = (graph, srcNode, dstNode, visited) => {
  if (srcNode === dstNode) return true;
  if (visited.has(srcNode)) return false;

  visited.add(srcNode);

  for (let node of graph[srcNode]) {
    if (hasPath(graph, node, dstNode, visited) === true) return true;
  }

  return false;
};

const buildGraph = (edges) => {
  const graph = {};
  for (const edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return hasPath(graph, nodeA, nodeB, new Set());
};

console.log("Path from 'j' to 'm' exists:", undirectedPath(edges, "j", "m")); // -> true
console.log("Path from 'i' to 'n' exists:", undirectedPath(edges, "i", "n")); // -> false
