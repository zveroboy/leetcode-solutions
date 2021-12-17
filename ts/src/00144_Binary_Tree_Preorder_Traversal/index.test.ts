import { TreeNode } from '../data/TreeNode'
import { preorderTraversal as solution } from '.'

describe(solution, () => {
  it('case [1,null,2,3]', () => {
    const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))
    expect(solution(root)).toEqual([1, 2, 3])
  })
  it('case [1,2]', () => {
    const root = new TreeNode(1, new TreeNode(2))
    expect(solution(root)).toEqual([1, 2])
  })
  it('case [1,null,2]', () => {
    const root = new TreeNode(1, null, new TreeNode(2))
    expect(solution(root)).toEqual([1, 2])
  })
})
