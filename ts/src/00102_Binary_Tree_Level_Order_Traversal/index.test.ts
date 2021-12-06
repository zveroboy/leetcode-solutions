import { fromArray, TreeNode } from '../data/TreeNode'
import solution from '.'

describe('should solve', () => {
  it('case 1', () => {
    const root = fromArray([3, 9, 20, null, null, 15, 7])
    expect(solution(root)).toEqual([[3], [9, 20], [15, 7]])
  })
  it('case [1]', () => {
    const root = fromArray([1])
    expect(solution(root)).toEqual([[1]])
  })
  it('case []', () => {
    const root = fromArray([])
    expect(solution(root)).toEqual([])
  })
})
