import { fromArray, toArray } from '../data/TreeNode'
import { searchBST as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    const root = fromArray([4, 2, 7, 1, 3])
    const result = solution(root, 2)
    expect(toArray(result)).toEqual([2, 1, 3])
  })
  it('case 2', () => {
    const root = fromArray([4, 2, 7, 1, 3])
    const result = solution(root, 5)
    expect(toArray(result)).toEqual([])
  })
})
