import { fromArray, toArray } from '../data/TreeNode'
import { lowestCommonAncestor as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    const root = fromArray([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])
    const result = solution(root, root?.left || null, root?.right || null)
    expect(result?.val).toEqual(3)
  })

  it('case 2', () => {
    const root = fromArray([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])
    const result = solution(
      root,
      root?.left || null,
      root?.left?.right?.right || null,
    )
    expect(result?.val).toEqual(5)
  })
})
