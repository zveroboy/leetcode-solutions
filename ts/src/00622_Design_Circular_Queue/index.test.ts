import { MyCircularQueue } from '.'

describe('should solve', () => {
  it('case 1', () => {
    const myCircularQueue = new MyCircularQueue(3)
    expect(myCircularQueue.enQueue(1)).toBe(true) // return True
    expect(myCircularQueue.enQueue(2)).toBe(true) // return True
    expect(myCircularQueue.enQueue(3)).toBe(true) // return True
    expect(myCircularQueue.enQueue(4)).toBe(false) // return False
    expect(myCircularQueue.Rear()).toBe(3) // return 3
    expect(myCircularQueue.isFull()).toBe(true) // return True
    expect(myCircularQueue.deQueue()).toBe(true) // return True
    expect(myCircularQueue.enQueue(4)).toBe(true) // return True
    expect(myCircularQueue.Rear()).toBe(4) // return 4
  })
})
