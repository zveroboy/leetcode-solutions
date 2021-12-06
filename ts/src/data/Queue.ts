import { ListNode } from './ListNode'

export class Queue {
  public limit
  head: ListNode<number> | null = null
  tail: ListNode<number> | null = null
  constructor(k: number) {
    this.limit = k
  }

  *[Symbol.iterator]() {
    let node = this.head
    while (node) {
      yield node
      node = node.next
    }
  }

  enQueue(value: number): boolean {
    if (this.isFull()) {
      return false
    }

    let node: ListNode<number> | null = null
    if (!this.head) {
      node = new ListNode(value)
      this.head = node
      this.tail = node
      return true
    }

    if (!this.tail) {
      return false
    }

    node = new ListNode(value)
    this.tail.next = node
    this.tail = node
    return true
  }

  deQueue(): boolean {
    if (this.isEmpty()) {
      return false
    }
    this.head = this.head?.next ?? null
    if (!this.head) {
      this.tail = null
    }
    return true
  }

  Front(): number {
    return this.head?.val ?? -1
  }

  Rear(): number {
    return this.tail?.val ?? -1
  }

  isEmpty(): boolean {
    return !this.head
  }

  isFull(): boolean {
    return this.limit <= this.length()
  }

  length(): number {
    return [...this].length
  }
}
