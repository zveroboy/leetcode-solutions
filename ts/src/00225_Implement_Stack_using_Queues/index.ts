import { ListNodeBase } from '../data/ListNode'

class Queue<T> {
  first: ListNodeBase<T> | null = null
  last: ListNodeBase<T> | null = null
  size = 0

  push(val: T) {
    const last = new ListNodeBase<T>(val)
    if (!this.last) {
      this.first = last
    } else {
      this.last.next = last
    }
    this.last = last
    return ++this.size
  }

  pop() {
    const first = this.first
    if (!first) {
      return
    }

    if (this.last === first) {
      this.last = null
    }

    this.first = this.first?.next ?? null
    this.size--
    return first.val
  }

  peek() {
    return this.first?.val
  }

  *[Symbol.iterator]() {
    let node = this.first
    while (node) {
      yield node.val
      node = node.next
    }
  }
}

class InfiniteOpError extends Error {
  constructor() {
    super('Infinite op')
    this.name = 'InfiniteError'
  }
}

let lim = 100

const assertIsFinite = () => {
  if (--lim < 0) {
    throw new InfiniteOpError()
  }
}

export class MyStack<T> {
  primary = new Queue<T>()
  secondary = new Queue<T>()

  // O(1)
  push(x: T) {
    if (this.primary.size) {
      const val = this.primary.pop()
      if (val != null) this.secondary.push(val)
    }

    this.primary.push(x)
  }

  // O(n)
  pop() {
    const result = this.primary.pop()
    if (!this.primary.size) {
      while (this.secondary.size > 1) {
        assertIsFinite()
        const val = this.secondary.pop()
        if (val != null) this.primary.push(val)
      }
      ;[this.secondary, this.primary] = [this.primary, this.secondary]
    }
    return result
  }

  // O(1)
  top() {
    return this.primary.peek()
  }

  // O(1)
  empty() {
    return !this.primary.size
  }
}
