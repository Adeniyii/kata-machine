export default function bfs(head: BinaryNode<number>, needle: number): boolean {

  const queue: BinaryNode<number>[] = [head];
  let found = false;

  while (queue.length) {
    console.log("q: ", queue)
    if (queue[0].left) {
      queue.push(queue[0].left)
    }
    if (queue[0].right) {

      queue.push(queue[0].right)
    }

    let dq = queue.shift()?.value;
    if (dq === needle) {
      found = true;
    }
  }
  return found;
}
