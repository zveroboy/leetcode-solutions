import { Queue } from '../data/Queue'

export class MovingAverage {
  #queue: Queue
  constructor(size: number) {
    this.#queue = new Queue(size)
  }

  next(val: number): number {
    if (this.#queue.isFull()) {
      this.#queue.deQueue()
    }
    this.#queue.enQueue(val)
    let acc = 0
    for (const node of this.#queue) {
      acc += node.val
    }
    return Math.round((1e5 * acc) / this.#queue.length()) / 1e5
  }
}
