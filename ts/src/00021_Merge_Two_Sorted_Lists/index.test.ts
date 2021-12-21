import { mergeTwoLists as solution } from '.'
import { fromArray, toArray } from '../data/ListNode'

describe(solution, () => {
  it('case 1', () => {
    const sll1 = fromArray([1, 2, 4])
    const sll2 = fromArray([1, 3, 4])
    const res = solution(sll1, sll2)
    expect(toArray(res)).toEqual([1, 1, 2, 3, 4, 4])
  })
  it('case 2', () => {
    const sll1 = fromArray([])
    const sll2 = fromArray([])
    const res = solution(sll1, sll2)
    expect(toArray(res)).toEqual([])
  })
  it('case 3', () => {
    const sll1 = fromArray([])
    const sll2 = fromArray([0])
    const res = solution(sll1, sll2)
    expect(toArray(res)).toEqual([0])
  })
})
