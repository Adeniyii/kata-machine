export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {

  let seen = new Array(graph.length).fill(false)
  let path: number[] = []
  walk(graph, source, needle, seen, path)
  return path.length ? path : null
}

function walk(graph: WeightedAdjacencyList, source: number, needle: number, seen: boolean[], path: number[]): boolean {
  if (source === needle) {
    path.push(source)
    return true;
  }

  if (seen[source]) return false;

  seen[source] = true;

  // pre recurse
  path.push(source)

  let neighbours = graph[source]
  for (let i = 0; i < neighbours.length; i++) {
    if (walk(graph, neighbours[i].to, needle, seen, path)) {
      return true;
    }
  }
  // post recurse
  path.pop()
  return false;
}
