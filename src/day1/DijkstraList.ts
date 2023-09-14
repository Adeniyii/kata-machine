export default function dijkstra_list(source: number, sink: number, graph: WeightedAdjacencyList): number[] {

  let seen = new Array(graph.length).fill(false)
  let prev = new Array(graph.length).fill(-1)
  let dists = new Array(graph.length).fill(Infinity)

  dists[source] = 0;
  while (hasUnvisited(seen, dists)) {
    let lo = getLowestUnvisited(dists, seen)

    seen[lo] = true;

    for (let i = 0; i < graph[lo].length; i++) {
      let currEdge = graph[lo][i]
      let dist = currEdge.weight + dists[lo]

      if (dist < dists[currEdge.to]) {
        dists[currEdge.to] = dist;
        prev[currEdge.to] = lo;
      }
    }
  }

  let idx = sink;
  let finalArr: number[] = []

  if (prev[sink] === -1) return []

  while (prev[idx] != -1) {
    finalArr.push(idx)
    idx = prev[idx];
  }
  finalArr.push(source)
  return finalArr.reverse()
}

function hasUnvisited(seen: number[], dists: number[]) {
  return seen.some((_, i) => !seen[i] && dists[i] < Infinity)
}

function getLowestUnvisited(dists: number[], seen: boolean[]) {
  let lowest = Infinity;
  let idx = -1;

  for (let i = 0; i < dists.length; i++) {
    if (dists[i] < lowest && !seen[i]) {
      lowest = dists[i];
      idx = i;
    }
  }

  return idx;
}
