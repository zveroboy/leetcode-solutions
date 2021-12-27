import { fromArray } from '../data/Node'
import { BSTIterator } from '.'

describe(BSTIterator, () => {
  it('case 1', () => {
    const bSTIterator = new BSTIterator(
      fromArray([7, 3, 15, null, null, 9, 20]),
    )
    expect(bSTIterator.next()).toBe(3) // return 3
    expect(bSTIterator.next()).toBe(7) // return 7
    expect(bSTIterator.hasNext()).toBe(true) // return True
    expect(bSTIterator.next()).toBe(9) // return 9
    expect(bSTIterator.hasNext()).toBe(true) // return True
    expect(bSTIterator.next()).toBe(15) // return 15
    expect(bSTIterator.hasNext()).toBe(true) // return True
    expect(bSTIterator.next()).toBe(20) // return 20
    expect(bSTIterator.hasNext()).toBe(false) // return False
  })
})
