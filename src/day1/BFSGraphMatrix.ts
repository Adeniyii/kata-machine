import Queue from "./Queue";

export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
  let q = new Queue<number>()
  let seen = new Array(graph.length).fill(false)
  let prev: number[] = new Array(graph.length).fill(-1)
  let path: number[] = []

  q.enqueue(source)
  seen[source] = true;
  while (q.length) {
    let curr = q.deque()!
    let neighbours = graph[curr]

    for (let i = 0; i < neighbours.length; i++) {

      if (seen[i]) continue;
      if (neighbours[i]) {
        q.enqueue(i)
        seen[i] = true;
        prev[i] = curr
      }
    }
  }

  // findpath v1 (recursive approach) -- uncommment `findPath()` below,
  // and comment out lines 31-38.
  // findpath(source, needle, path, prev)

  // find path v2 (non-recursive)
  let curr = needle;
  while (prev[curr] !== -1) {
    path.push(curr)
    curr = prev[curr]
    if (prev[curr] === -1) {
      path.push(curr)
    }
  }
  path.reverse()
  return path.length ? path : null;
}

function findpath(source: number | undefined, needle: number, path: number[], prev: number[]) {
  if (source === undefined) {
    return false
  }
  if (source === needle) {
    path.push(source)
    return true
  }

  path.push(source)
  for (let i = 0; i < prev.length; i++) {
    if (prev[i] === source) {
      let found = findpath(i, needle, path, prev)
      if (found) {
        return true;
      }
    }
  }
  path.pop()
  return false;
}
