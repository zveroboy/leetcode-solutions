import { fromArray } from '../data/TreeNode'
import { isSymmetric as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    const root = fromArray([1, 2, 2, 3, 4, 4, 3])
    expect(solution(root)).toBe(true)
  })
  it('case 2', () => {
    const root = fromArray([1, 2, 2, null, 3, null, 3])
    expect(solution(root)).toBe(false)
  })
})
