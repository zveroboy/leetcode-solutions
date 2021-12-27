import { fromArray, toArray } from '../data/Node'
import { connect as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    const root = fromArray([1, 2, 3, 4, 5, 6, 7])
    const res = solution(root)
    expect(toArray(res)).toEqual([1, '#', 2, 3, '#', 4, 5, 6, 7, '#'])
  })
  it('case 2', () => {
    const root = fromArray([])
    const res = solution(root)
    expect(toArray(res)).toEqual([])
  })
})
