import { fromArray } from '../data/TreeNode'
import { searchBST as solution } from '.'
import { preorderTraversal } from '../00144_Binary_Tree_Preorder_Traversal'

describe(solution, () => {
  it('case 1', () => {
    const root = fromArray([4, 2, 7, 1, 3])
    const result = solution(root, 2)
    expect(preorderTraversal(result)).toEqual([2, 1, 3])
  })
  it('case 2', () => {
    const root = fromArray([4, 2, 7, 1, 3])
    const result = solution(root, 5)
    expect(preorderTraversal(result)).toEqual([])
  })
})
