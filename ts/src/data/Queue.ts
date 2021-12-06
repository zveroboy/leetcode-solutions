import { ListNode } from './ListNode'

export class Queue<T> {
  public limit
  head: ListNode<T> | null = null
  tail: ListNode<T> | null = null
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

  enQueue(value: T): boolean {
    if (this.isFull()) {
      return false
    }

    let node: ListNode<T> | null = null
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

  Front(): T | undefined {
    return this.head?.val
  }

  Rear(): T | undefined {
    return this.tail?.val
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

export class QueueNumber extends Queue<number> {
  Front(): number {
    return super.Front() ?? -1
  }

  Rear(): number {
    return super.Rear() ?? -1
  }
}
