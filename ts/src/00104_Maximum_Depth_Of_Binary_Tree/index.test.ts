import { fromArray } from '../data/TreeNode'
import { maxDepth as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    const root = fromArray([3, 9, 20, null, null, 15, 7])
    expect(solution(root)).toEqual<number>(3)
  })
  it('case 2', () => {
    const root = fromArray([1, null, 2])
    expect(solution(root)).toEqual<number>(2)
  })
  it('case 3', () => {
    const root = fromArray([])
    expect(solution(root)).toEqual<number>(0)
  })
  it('case 4', () => {
    const root = fromArray([0])
    expect(solution(root)).toEqual<number>(1)
  })
})
