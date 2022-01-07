import { fromArray, toArray } from '../data/TreeNode'
import { insertIntoBST as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    const root = fromArray([4, 2, 7, 1, 3])
    const result = solution(root, 5)
    expect(toArray(result)).toEqual([4, 2, 7, 1, 3, 5])
  })

  it('case 2', () => {
    const root = fromArray([40, 20, 60, 10, 30, 50, 70])
    const result = solution(root, 25)
    expect(toArray(result)).toEqual([
      40,
      20,
      60,
      10,
      30,
      50,
      70,
      null,
      null,
      25,
    ])
  })

  it('case 3', () => {
    const root = fromArray([4, 2, 7, 1, 3, null, null, null, null, null, null])
    const result = solution(root, 5)
    expect(toArray(result)).toEqual([4, 2, 7, 1, 3, 5])
  })

  it('case 4', () => {
    const root = null
    const result = solution(root, 5)
    expect(toArray(result)).toEqual([5])
  })
})
