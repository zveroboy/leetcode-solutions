import { MyStack } from '.'

describe(MyStack, () => {
  it.skip('case 1', () => {
    const myStack = new MyStack()
    myStack.push(1)
    myStack.push(2)
    expect(myStack.top()).toBe(2) // return 2
    expect(myStack.pop()).toBe(2) // return 2
    expect(myStack.empty()).toBe(false) // return False
  })
  it('case 2', () => {
    const myStack = new MyStack()
    myStack.push(1)
    myStack.push(2)
    myStack.push(3)
    expect(myStack.pop()).toBe(3) // return 2
    expect(myStack.pop()).toBe(2) // return 2
    expect(myStack.pop()).toBe(1) // return 2
    expect(myStack.empty()).toBe(true) // return False
  })
})
