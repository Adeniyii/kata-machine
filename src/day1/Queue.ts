export default class Queue<T> {
  public length: number;

  private queue: T[]

  constructor() {
    this.queue = []
    this.length = this.queue.length
  }

  enqueue(item: T): void {
    this.queue.push(item)
    this.length++
  }
  deque(): T | undefined {
    this.length--
    return this.queue.shift()

  }
  peek(): T | undefined {
    return this.queue[0]
  }
}
