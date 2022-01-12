import { ListNodeBase } from '../data/ListNode'

class Stack<T> {
  top: ListNodeBase<T> | null = null
  bottom: ListNodeBase<T> | null = null
  size = 0

  push(val: T) {
    const top = new ListNodeBase<T>(val, this.top)
    this.top = top
    if (!this.bottom) {
      this.bottom = top
    }
    return ++this.size
  }

  pop() {
    const top = this.top
    if (!top) {
      return
    }
    if (this.bottom === top) {
      this.bottom = null
    }
    this.top = this.top?.next ?? null
    this.size--
    return top.val
  }

  peek() {
    return this.top?.val
  }

  *[Symbol.iterator]() {
    let node = this.top
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
  if (--lim < 0) throw new InfiniteOpError()
}

export class MyQueue<T> {
  straight = new Stack<T>()
  reversed = new Stack<T>()

  // O(1)
  push(x: T) {
    if (this.reversed.size) {
      this.straight.push(x)
    } else {
      this.reversed.push(x)
    }
  }

  // O(n)
  pop() {
    const result = this.reversed.pop()
    if(!this.reversed.size){
      while (this.straight.size) {
        assertIsFinite()
        const val = this.straight.pop()
        if (val != null) this.reversed.push(val)
      }
    }
    return result
  }

  // O(1)
  peek() {
    return this.reversed.peek()
  }

  // O(1)
  empty() {
    return !this.reversed.size
  }
}
