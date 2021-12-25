import { toArray } from '../data/TreeNode'
import { buildTree as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    const tree = solution([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
    expect(toArray(tree)).toEqual([3, 9, 20, null, null, 15, 7])
  })
  it('case 2', () => {
    const tree = solution([-1], [-1])
    expect(toArray(tree)).toEqual([-1])
  })
  it('case 3', () => {
    const tree = solution([3, 1, 2, 4], [1, 2, 3, 4])
    expect(toArray(tree)).toEqual([3, 1, 4, null, 2])
  })
  it('case 4', () => {
    const tree = solution([1, 2, 3], [3, 2, 1])
    expect(toArray(tree)).toEqual([1, 2, null, 3])
  })
})
