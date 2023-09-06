export default class MinHeap {
  public length: number;
  private heap: number[];


  constructor() {
    this.heap = [];
    this.length = this.heap.length;
  }

  getLeftChild(parent_idx: number): number {
    return (2 * parent_idx + 1)
  }

  getRightChild(parent_idx: number): number {
    return (2 * parent_idx + 2)
  }

  getParent(child_idx: number): number {
    return Math.floor((child_idx - 1) / 2)
  }

  walkUp(idx: number) {
    if (idx === 0) return;
    let p_idx = this.getParent(idx)
    let v = this.heap[idx]

    if (v < this.heap[p_idx]) {
      this.heap[idx] = this.heap[p_idx]
      this.heap[p_idx] = v;
      this.walkUp(p_idx)
    }
    return;
  }

  walkDown(idx: number) {
    if (idx >= this.length) return;
    let l_idx = this.getLeftChild(idx)
    let r_idx = this.getRightChild(idx)
    let v = this.heap[idx]
    let l_child = this.heap[l_idx]
    let r_child = this.heap[r_idx]

    let isLeftChildLesser = l_child < r_child
    let isRightChildLesser = l_child > r_child
    if (isLeftChildLesser && v > l_child) {
      this.heap[idx] = l_child
      this.heap[l_idx] = v
      this.walkDown(l_idx)
    } else if (isRightChildLesser && v > r_child) {
      this.heap[idx] = r_child
      this.heap[r_idx] = v
      this.walkDown(r_idx)
    }
    return;
  }

  insert(value: number): void {
    this.heap.push(value)
    this.length++

    if (this.length === 1) {
      return;
    }
    this.walkUp(this.length - 1)
  }
  delete(): number {
    if (this.heap.length === 0) return -1;
    if (this.heap.length === 1) {
      this.length--
      return this.heap.pop() || -1
    }

    let item = this.heap.shift() || -1
    this.length = this.heap.unshift(this.heap.pop() || -1)

    this.walkDown(0)
    return item
  }
}
