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

  it('case 5', () => {
    const tree = fromArray([
      4,
      // 1
      -7,
      -3,
      // 2
      null,
      null,
      -9,
      -3,
      // 3
      9,
      -7,
      -4,
      null,
      // 4
      6,
      null,
      -6,
      -6,
      null,
      null,
      // 5
      0,
      6,
      5,
      null,
      9,
      null,
      // 6
      null,
      -1,
      -4,
      null,
      null,
      null,
      -2,
    ])
    // 0 level
    expect(tree?.val).toBe(4)

    // 1 level
    expect(tree?.left?.val).toBe(-7)
    expect(tree?.right?.val).toBe(-3)
    expect(tree?.right?.left?.val).toBe(-9)
    expect(tree?.right?.right?.val).toBe(-3)

    // 2 level
    expect(tree?.right?.left?.left?.val).toBe(9)
    expect(tree?.right?.left?.right?.val).toBe(-7)

    expect(tree?.right?.right?.left?.val).toBe(-4)

    // 3 level
    expect(tree?.right?.left?.left?.left?.val).toBe(6)
    expect(tree?.right?.left?.left?.right?.val).toBeUndefined()

    expect(tree?.right?.left?.right?.left?.val).toBe(-6)
    expect(tree?.right?.left?.right?.right?.val).toBe(-6)

    // 4 level
    expect(tree?.right?.left?.left?.left?.left?.val).toBe(0)
    expect(tree?.right?.left?.left?.left?.right?.val).toBe(6)

    expect(tree?.right?.left?.right?.left?.left?.val).toBe(5)
    expect(tree?.right?.left?.right?.left?.right?.val).toBeUndefined()

    expect(tree?.right?.left?.right?.right?.left?.val).toBe(9)
    expect(tree?.right?.left?.right?.right?.right?.val).toBeUndefined()
    // 4 level
    expect(tree?.right?.left?.left?.left?.left?.val).toBe(0)
    expect(tree?.right?.left?.left?.left?.right?.val).toBe(6)

    expect(tree?.right?.left?.right?.left?.left?.val).toBe(5)
    expect(tree?.right?.left?.right?.left?.right?.val).toBeUndefined()

    expect(tree?.right?.left?.right?.right?.left?.val).toBe(9)
    expect(tree?.right?.left?.right?.right?.right?.val).toBeUndefined()

    // 5 level
    expect(tree?.right?.left?.left?.left?.left?.right?.val).toBe(-1)
    expect(tree?.right?.left?.left?.left?.right?.left?.val).toBe(-4)

    expect(tree?.right?.left?.right?.right?.left?.left?.val).toBe(-2)
  })
})
