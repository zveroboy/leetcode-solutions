import { MinStack } from '.'

describe('should solve', () => {
  it('case 1', () => {
    const minStack = new MinStack()
    minStack.push(-2)
    minStack.push(0)
    minStack.push(-3)
    expect(minStack.getMin()).toBe(-3) // return -3
    minStack.pop()
    expect(minStack.top()).toBe(0) // return 0
    expect(minStack.getMin()).toBe(-2) // return -2
  })

  it('case 2', () => {
    const minStack = new MinStack()
    minStack.push(2147483646)
    minStack.push(2147483646)
    minStack.push(2147483647)
    expect(minStack.top()).toBe(2147483647)
    minStack.pop()
    expect(minStack.getMin()).toBe(2147483646)
    minStack.pop()
    expect(minStack.getMin()).toBe(2147483646)
    minStack.pop()
    minStack.push(2147483647)
    expect(minStack.top()).toBe(2147483647)
    expect(minStack.getMin()).toBe(2147483647)
    minStack.push(-2147483648)

    expect(minStack.top()).toBe(-2147483648)
    expect(minStack.getMin()).toBe(-2147483648)
    minStack.pop()
    expect(minStack.getMin()).toBe(2147483647)
  })

  it('case 3', () => {
    const minStack = new MinStack()
    minStack.push(2)
    minStack.push(3)
    minStack.push(1)
    expect(minStack.getMin()).toBe(1)
    minStack.pop()
    expect(minStack.top()).toBe(3)
    expect(minStack.getMin()).toBe(2)
  })
})
