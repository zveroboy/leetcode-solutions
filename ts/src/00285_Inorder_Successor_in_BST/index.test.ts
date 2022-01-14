import { fromArray, TreeNode } from '../data/TreeNode'
import { inorderSuccessor as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    const root = fromArray([2, 1, 3])
    const result = solution(root, root?.left ?? null)
    expect(result?.val).toBe(2)
  })

  it('case 2', () => {
    const root = fromArray([5, 3, 6, 2, 4, null, null, 1])
    const result = solution(root, new TreeNode(6))
    expect(result).toBeNull()
  })

  it('case 3', () => {
    const root = fromArray([2, null, 3])
    const result = solution(root, root)
    expect(result?.val).toBe(3)
  })

  it('case 4', () => {
    const root = fromArray([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])
    const result = solution(root, root?.left ?? null)
    expect(result?.val).toBe(3)
  })
})
