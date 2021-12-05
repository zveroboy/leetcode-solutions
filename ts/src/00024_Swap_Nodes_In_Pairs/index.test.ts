import solution from '.'
import { fromArray, toArray } from '../data/ListNode'

describe('should solve', () => {
  it('case 1', () => {
    const sll = fromArray([1, 2, 3, 4])
    const res = solution(sll)
    expect(toArray(res)).toEqual([2, 1, 4, 3])
  })

  it('case 2', () => {
    const sll = fromArray([])
    const res = solution(sll)
    expect(toArray(res)).toEqual([])
  })

  it('case 3', () => {
    const sll = fromArray([1])
    const res = solution(sll)
    expect(toArray(res)).toEqual([1])
  })
})
