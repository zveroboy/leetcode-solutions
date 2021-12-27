import { ArrayQueue } from '../data/Queue'

export const bfs =
  <T>(iterFn: (item: T) => IterableIterator<T>) =>
  (initial: T) => {
    const queue = new ArrayQueue<T>()
    queue.enqueue(initial)
    while (!queue.isEmpty()) {
      const item = queue.dequeue()
      if (!item) throw new Error('Something went wrong')
      ;[...iterFn(item)].forEach((item) => queue.enqueue(item))
    }
  }
