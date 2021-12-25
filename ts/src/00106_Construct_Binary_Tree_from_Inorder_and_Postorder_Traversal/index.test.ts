import { toArray } from '../data/TreeNode'
import { buildTree as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    const tree = solution([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])
    expect(toArray(tree)).toEqual([3, 9, 20, null, null, 15, 7])
  })
  it('case 2', () => {
    const tree = solution([-1], [-1])
    expect(toArray(tree)).toEqual([-1])
  })
})
