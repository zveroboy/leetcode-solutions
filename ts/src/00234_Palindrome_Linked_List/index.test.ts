import solution from '.'
import { fromArray } from '../data/ListNode'

describe('should solve', () => {
  it('case 1', () => {
    const ssl = fromArray([1, 2, 3, 3, 2, 1])
    expect(solution(ssl)).toBe(true)
  })

  it('case 2', () => {
    const ssl = fromArray([1, 2])
    expect(solution(ssl)).toBe(false)
  })
})
