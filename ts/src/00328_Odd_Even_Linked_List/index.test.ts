import { oddEvenList as solution } from '.'
import { toArray, fromArray } from '../data/ListNode'

describe(solution, () => {
  it('case 1', () => {
    const ssl = fromArray([1, 2, 3, 4, 5])
    const sslRes = solution(ssl)
    expect(toArray(sslRes)).toEqual([1, 3, 5, 2, 4])
  })
  it('case 2', () => {
    const ssl = fromArray([2, 1, 3, 5, 6, 4, 7])
    const sslRes = solution(ssl)
    expect(toArray(sslRes)).toEqual([2, 3, 6, 7, 1, 5, 4])
  })
})
