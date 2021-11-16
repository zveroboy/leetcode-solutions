import solution from '.'
import { createIntersected } from '../data/ListNode'

describe('should solve', () => {
  it('case 1', () => {
    const [sllA, sllB] = createIntersected(
      8,
      [4, 1, 8, 4, 5],
      [5, 6, 1, 8, 4, 5],
      2,
      3,
    )

    expect(solution(sllA, sllB)).toEqual(sllA.next?.next)
    expect(solution(sllA, sllB)).toEqual(sllB.next?.next?.next)
  })

  it('case 2', () => {
    const [sllA, sllB] = createIntersected(1, [1], [1], 0, 0)

    expect(solution(sllA, sllB)).toEqual(sllA)
    expect(solution(sllA, sllB)).toEqual(sllB)
  })

  it('case 3', () => {
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

    expect(solution(sllA, sllB)).toEqual(sllA.next)
    // expect(solution(sllA, sllB)).toEqual(sllB.next)
  })
})
