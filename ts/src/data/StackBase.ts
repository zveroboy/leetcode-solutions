import { ListNode } from './ListNode'

export class StackBase<T> {
  head: ListNode<T> | null = null
  tail: ListNode<T> | null = null

  push(val: T): void {
    const node = new ListNode(val)
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
