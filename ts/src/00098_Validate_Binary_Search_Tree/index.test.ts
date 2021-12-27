import { fromArray } from '../data/TreeNode'
import { isValidBST as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    const root = fromArray([2, 1, 3])
    expect(solution(root)).toBe(true)
  })
  it('case 2', () => {
    const root = fromArray([5, 1, 4, null, null, 3, 6])
    expect(solution(root)).toBe(false)
  })
  it('case 3', () => {
    const root = fromArray([5, 4, 6, null, null, 3, 7])
    expect(solution(root)).toBe(false)
  })
  it('case 4', () => {
    const root = fromArray([3, 2, null, 1, -2147483648])
    expect(solution(root)).toBe(false)
  })
})
