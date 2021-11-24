import solution from '.'
import { fromArray, toArray } from '../data/ListNode'

describe('should solve', () => {
  it('case 1', () => {
    expect(solution([2, 1])).toBe(false)
    expect(solution([3, 5, 5])).toBe(false)
    expect(solution([0, 3, 2, 1])).toBe(true)
    expect(solution([1, 3, 2])).toBe(true)
    expect(solution([1, 1, 1, 1, 1, 1, 1, 2, 1])).toBe(false)
    expect(solution([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])).toBe(false)
  })
})
