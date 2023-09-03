export default class SinglyLinkedList<T> {
  public length: number;
  private head: Node<T> | null;
  private tail: Node<T> | null;


  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(item: T): void {
    const n = new Node(item);
    n.next = this.head;
    this.head = n;
    if (this.length === 0) {
      this.tail = n;
    }
    this.length++;
  }
  insertAt(item: T, idx: number): void {
    let i = 0
    let tmp = this.head;
    while (tmp?.next && i < this.length) {
      if (idx === 0) {
        const n = new Node(item);
        n.next = this.head;
        if (this.head === null) {
          this.tail = n;
        }
        this.head = n;
        this.length++;
      }
      if (i + 1 === idx) {
        const n = new Node(item)
        n.next = tmp.next;
        tmp.next = n;
        this.length++;

        break;
      }
      tmp = tmp.next;
      ++i;
    }
  }
  append(item: T): void {
    const n = new Node(item);
    if (this.length === 0) {
      this.head = n;
      this.tail = n;
      this.length++;
    } else {
      this.tail!.next = n;
      this.tail = n;
      this.length++;
    }
  }
  remove(item: T): T | undefined {
    let tmp = this.head;
    if (!tmp) return
    if (tmp.value === item) {
      this.head = tmp.next;
      tmp.next = null;
      if (this.length === 1) {
        this.tail = this.head;
      }
      this.length--;
      return tmp.value;
    }
    while (tmp !== null) {
      if (tmp.next?.value === item) {
        let removed = tmp.next;
        tmp.next = removed.next;
        removed.next = null;
        this.length--;
        return removed.value;
      }
      tmp = tmp.next;
    }
    return;
  }
  get(idx: number): T | undefined {
    let tmp = this.head
    let i = 0;
    while (tmp) {
      if (idx === i) {
        return tmp.value;
      }
      ++i;
      tmp = tmp.next;
    }
    return;
  }
  removeAt(idx: number): T | undefined {

    let tmp = this.head;
    let i = 0;
    if (tmp === null) return;
    if (idx === 0) {
      this.head = tmp.next;
      tmp.next = null;
      if (this.length === 1) {
        this.tail = this.head;
      }
      this.length--;
      return tmp?.value;
    }
    while (tmp) {
      if (idx === i + 1) {
        let removed = tmp.next;
        tmp.next = removed?.next || null;
        if (removed?.next) { removed.next = null; }
        this.length--;
        return removed?.value;
      }
      ++i;
      tmp = tmp.next;
    }
    return;
  }
}

class Node<T> {
  value;
  next: Node<T> | null = null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}
