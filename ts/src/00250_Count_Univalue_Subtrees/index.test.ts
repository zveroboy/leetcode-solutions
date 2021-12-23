import { fromArray } from '../data/TreeNode'
import { countUnivalSubtrees as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    const root = fromArray([5, 1, 5, 5, 5, null, 5])
    expect(solution(root)).toBe<number>(4)
  })
  it('case 2', () => {
    const root = fromArray([5, 5, 5, 5, 5, null, 5])
    expect(solution(root)).toBe<number>(6)
  })
  it('case 3', () => {
    const root = fromArray([])
    expect(solution(root)).toBe<number>(0)
  })
})
