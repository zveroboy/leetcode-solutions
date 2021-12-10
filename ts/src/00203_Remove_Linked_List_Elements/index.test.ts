import { removeElements as solution } from '.'
import { toArray, fromArray } from '../data/ListNode'

describe(solution, () => {
  it('case 1', () => {
    const ssl = fromArray([1, 2, 6, 3, 4, 5, 6])
    const sslRes = solution(ssl, 6)
    expect(toArray(sslRes)).toEqual([1, 2, 3, 4, 5])
  })
  it('case 2', () => {
    const ssl = fromArray([])
    const sslRes = solution(ssl, 1)
    expect(toArray(sslRes)).toEqual([])
  })
  it('case 3', () => {
    const ssl = fromArray([7, 7, 7, 7])
    const sslRes = solution(ssl, 7)
    expect(toArray(sslRes)).toEqual([])
  })
})
