import { createCycle, createIntersected } from './ListNode'

it('should cycle', () => {
  const sll1 = createCycle([3, 2, 0, -4], 1)
  expect(sll1).toBeDefined()
  expect(sll1?.next?.next?.next?.next).toBe(sll1?.next)

  const sll2 = createCycle([1, 2], 0)
  expect(sll2).toBeDefined()
  expect(sll2?.next?.next).toBe(sll2)

  const sll3 = createCycle([1], -1)
  expect(sll3).toBeDefined()
  expect(sll3?.next).toBe(null)

  const sll4 = createCycle(
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    1,
  )
  expect(sll4).toBeDefined()
  expect(
    sll4?.next?.next?.next?.next?.next?.next?.next?.next?.next?.next?.next?.next
      ?.next?.next?.next?.next?.next?.next?.next?.next,
  ).toBe(sll4?.next)
})

describe('should intersect', () => {
  it('should intersect 1', () => {
    // intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
    const [sllA, sslB] = createIntersected(
      8,
      [4, 1, 8, 4, 5],
      [5, 6, 1, 8, 4, 5],
      2,
      3,
    )
    expect(sllA.next?.next).toBe(sslB.next?.next?.next)
  })
  it('should intersect 2', () => {
    const [sllA, sllB] = createIntersected(1, [1], [1], 0, 0)
    expect(sllA).toBe(sllB)
  })
  it('should intersect 3', () => {
    const [sllA, sllB] = createIntersected(
      51,
      [1, 51],
      [
        2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38,
        40, 42, 44, 46, 48, 50, 51,
      ],
      1,
      25,
    )

    expect(sllA.next).toBe(
      sllB.next?.next?.next?.next?.next?.next?.next?.next?.next?.next?.next
        ?.next?.next?.next?.next?.next?.next?.next?.next?.next?.next?.next?.next
        ?.next?.next,
    )
  })
})
