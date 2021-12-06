import { fromArray } from './TreeNode'

describe(fromArray, () => {
  it('case 1', () => {
    const tree = fromArray([1])
    expect(tree?.val).toBe(1)
  })

  it('case 2', () => {
    const tree = fromArray([1, 2, 3])
    expect(tree?.val).toBe(1)
    expect(tree?.left?.val).toBe(2)
    expect(tree?.right?.val).toBe(3)
  })

  it('case 3', () => {
    const tree = fromArray([1, null, 2])
    expect(tree?.val).toBe(1)
    expect(tree?.left).toBe(null)
    expect(tree?.right?.val).toBe(2)
  })

  it('case 4', () => {
    const tree = fromArray([3, 9, 20, null, null, 15, 7])
    expect(tree?.val).toBe(3)

    expect(tree?.left?.val).toBe(9)
    expect(tree?.right?.val).toBe(20)

    expect(tree?.left?.left).toBe(null)
    expect(tree?.left?.right).toBe(null)
    expect(tree?.right?.left?.val).toBe(15)
    expect(tree?.right?.right?.val).toBe(7)
  })
})
