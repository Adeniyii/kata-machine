// #  # # #
// #  # # #
//        #
// # # #  #
// #      #
// #  # # #

const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
]

function walk(maze: string[], wall: string, end: Point, curr: Point, seen: boolean[][], path: Point[]) {
  // base cases
  // if current position is out of bounds
  if (curr.x >= maze[0].length || curr.y >= maze.length || curr.y < 0 || curr.x < 0) {
    return false;
  }
  // if current position is a wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }
  // if current position was already seen
  if (seen[curr.y][curr.x] === true) {
    return false;
  }
  // if we have reached our destination
  if (end.x === curr.x && end.y === curr.y) {
    path.push(curr)
    return true;
  }

  // if we make it to this section, the current position is valid
  // but it's not yet our destination, se we must recurse into it's
  // four (up, down, left, right) positions to find the next valid path.

  // add current valid position to the seen register
  seen[curr.y][curr.x] = true;
  // store the current position as a valid path.
  // it will be popped off later if it's four directions lead to invalid paths.
  path.push(curr)
  // recurse into all four directions
  // but stop recursing if a true value is returned froma branch.
  // A true value can only be returned if we have reached our destination.
  for (let i = 0; i < dir.length; ++i) {
    const [x, y] = dir[i];
    if (walk(maze, wall, end, { x: curr.x + x, y: curr.y + y }, seen, path)) {
      return true;
    }
  }
  // if we get to this section, then the current path had no valid branches.
  // if it had a valid branch, it would have returned a true value earlier from the for loop.

  // after recursing all four directions of the current position
  // we pop the current position off the path record since it is an invalid path,
  // and return false to it's execution address
  path.pop()
  return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
  const path: Point[] = []
  const seen = new Array(maze.length).fill(null).map(_ => new Array(maze[0].length).fill(false))
  walk(maze, wall, end, start, seen, path)
  return path
}
