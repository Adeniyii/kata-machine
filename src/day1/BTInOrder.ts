export default function in_order_search(head: BinaryNode<number>): number[] {

  const result: number[] = []
  if (!head) return result;
  // recurse left
  if (head.left) {
    result.push(...in_order_search(head.left))
  }
  result.push(head.value)
  // recurse right
  if (head.right) {
    result.push(...in_order_search(head.right))
  }
  return result;
}
