import solution from '.'
import { fromArray, toArray } from '../data/ListNode'

describe('should solve', () => {
  it('case 1', () => {
    const ssl = fromArray([1, 2, 3, 4, 5])
    const sol = solution(ssl)
    expect(sol).not.toBeNull()
    expect(toArray(sol!)).toEqual([5, 4, 3, 2, 1])
  })

  it('case 2', () => {
    const ssl = fromArray([1, 2])
    const sol = solution(ssl)
    expect(sol).not.toBeNull()
    expect(toArray(sol!)).toEqual([2, 1])
  })

  it('case 3', () => {
    const ssl = fromArray([])
    const sol = solution(ssl)
    expect(toArray(sol!)).toEqual([])
  })
})
