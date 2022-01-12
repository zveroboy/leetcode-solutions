import { MyQueue } from '.'

describe(MyQueue, () => {
  it('case 1', () => {
    const myQueue = new MyQueue<number>()
    myQueue.push(1) // queue is: [1]
    myQueue.push(2) // queue is: [1, 2] (leftmost is front of the queue)
    expect(myQueue.peek()).toBe(1) // return 1
    expect(myQueue.pop()).toBe(1)
    expect(myQueue.empty()).toBe(false) // return false
  })
})
