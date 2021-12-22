import { fromArray } from '../data/TreeNode'
import { hasPathSum as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    const root = fromArray([
      5,
      4,
      8,
      11,
      null,
      13,
      4,
      7,
      2,
      null,
      null,
      null,
      1,
    ])
    expect(solution(root, 22)).toBe(true)
  })
  it('case 2', () => {
    const root = fromArray([1, 2, 3])
    expect(solution(root, 5)).toBe(false)
  })
  it('case 3', () => {
    const root = fromArray([])
    expect(solution(root, 0)).toBe(false)
  })
})
