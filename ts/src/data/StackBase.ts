import { ListNodeBase } from './ListNode'

export class StackBase<T> {
  head: ListNodeBase<T> | null = null
  tail: ListNodeBase<T> | null = null

  push(val: T): void {
    const node = new ListNodeBase(val)
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
      return
    }
    node.next = this.head
    this.head = node
  }

  pop(): void {
    this.head = this.head?.next ?? null
  }

  top(): T | null {
    return this.head?.val ?? null
  }

  isEmpty(): boolean {
    return !this.head || !this.tail
  }

  *[Symbol.iterator]() {
    let node = this.head
    while (node) {
      yield node
      node = node.next
    }
  }
}
