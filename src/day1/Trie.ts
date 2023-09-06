const SIZE = 26;

export default class Trie {


  head: Node | null;

  constructor() {
    this.head = null
  }

  insert(item: string): void {
    if (!this.head) {
      this.head = this.newNode()
    }
    let tmp: Node = this.head;

    for (let i = 0; i < item.length; ++i) {
      let ascii_code = getCharOffset(item[i])
      if (!tmp?.children[ascii_code]) {
        const node = this.newNode()
        tmp.children[ascii_code] = node;
      }

      if (i === item.length - 1) {
        tmp.children[ascii_code]!.isTerminal = true;
        break;
      }

      tmp = tmp.children[ascii_code]!
    }

  }

  delete(item: string): void {
    this.delete_rec(item, this.head)
  }

  delete_rec(item: string, node: Node | null): boolean {
    if (!node) return false;
    if (!item) {
      if (node.isTerminal) {
        node.isTerminal = false;
        if (hasChildren(node)) return false;
        return true;
      }
    }

    let ascii = getCharOffset(item)
    let canDelete = this.delete_rec(item.slice(1), node.children[ascii])
    if (canDelete) {
      node.children[ascii] = null;
    }
    return !hasChildren(node)
  }

  find(partial: string): string[] {
    if (!this.head) return []

    let node = this.head;
    let result: string[] = [];

    for (let i = 0; i < partial.length; i++) {
      let childNode = node.children[getCharOffset(partial[i])]
      if (!childNode) return []
      node = childNode
    }
    walk(partial, node, result)
    return result;
  }

  printAllNodes() {
    const terminals = this.find("")
    console.log(terminals)
  }

  newNode(): Node {
    const node = new Node()

    return node
  }
}

function walk(prefix: string, node: Node, result: string[]) {
  if (!node) return
  if (node.isTerminal) result.push(prefix);

  for (let i = 0; i < SIZE; i++) {
    let childNode = node.children[i]
    if (childNode !== null) {
      walk(prefix + String.fromCharCode(reverseCharOffset(i)), childNode, result)
    }
  }
}

function hasChildren(node: Node) {
  for (let i = 0; i < SIZE; i++) {
    if (node.children[i]) return true;
  }
  return false;
}

function getCharOffset(char: string): number {
  let int = char.charCodeAt(0)
  let nadir = 'a'.charCodeAt(0)
  return int - nadir;
}

function reverseCharOffset(char: number): number {
  let nadir = 'a'.charCodeAt(0)
  return char + nadir;
}

class Node {
  children: (Node | null)[]
  isTerminal: boolean
  constructor() {
    this.children = Array(SIZE).fill(null)
    this.isTerminal = false
  }
}
