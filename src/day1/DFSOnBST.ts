
function walk(head: BinaryNode<number> | null, needle: number): boolean {
  if (!head) return false;
  if (needle === head.value) return true;

  if (needle > head.value) {
    return walk(head.right, needle)
  } else {
    return walk(head.left, needle)
  }
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {

  return walk(head, needle)
}
