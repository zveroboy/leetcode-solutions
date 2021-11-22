import solution from '.'
import { fromArray, toArray } from '../data/ListNode'

describe('should solve', () => {
  it('case 1', () => {
    const ssl = fromArray([1, 2, 3, 4, 5])
    const sol = solution(ssl, 2)
    expect(sol).not.toBeNull()
    expect(toArray(sol!)).toEqual([1, 2, 3, 5])
  })

  it('case 2', () => {
    const ssl = fromArray([1, 2])
    const sol = solution(ssl, 1)
    expect(sol).not.toBeNull()
    expect(toArray(sol!)).toEqual([1])
  })

  it('case 3', () => {
    const ssl = fromArray([1, 2])
    const sol = solution(ssl, 2)
    expect(sol).not.toBeNull()
    expect(toArray(sol!)).toEqual([2])
  })

  it('case 4', () => {
    const ssl = fromArray([1])
    const sol = solution(ssl, 1)
    expect(toArray(sol!)).toEqual([])
  })
})
