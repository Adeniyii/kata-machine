export default function pre_order_search(head: BinaryNode<number>): number[] {

  let result: number[] = []
  if (!head) return []

  result.push(head.value)

  if (head.left) {
    result.push(...pre_order_search(head.left))
  }
  if (head.right) {
    result.push(...pre_order_search(head.right))
  }
  return result;
}
