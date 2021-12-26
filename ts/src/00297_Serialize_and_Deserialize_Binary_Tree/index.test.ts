import { fromArray, toArray } from '../data/TreeNode'
import { serialize, deserialize } from '.'

describe('solution', () => {
  it('case 1', () => {
    const inputArr = [1, 2, 3, null, null, 4, 5]
    const tree = fromArray(inputArr)
    const res = deserialize(serialize(tree))
    expect(toArray(res)).toEqual(inputArr)
  })
  it('case 2', () => {
    const inputArr = [1, 2, 3, null, null, 4, 5, 6, 7]
    const tree = fromArray(inputArr)
    const res = deserialize(serialize(tree))
    expect(toArray(res)).toEqual(inputArr)
  })
  it('case 3', () => {
    const inputArr: number[] = []
    const tree = fromArray(inputArr)
    const res = deserialize(serialize(tree))
    expect(toArray(res)).toEqual(inputArr)
  })

  // [4,-7,-3,null,null,-9,-3,9,-7,-4,null,6,null,-6,-6,null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2]
  it('case 4', () => {
    const inputArr = [
      4,
      -7,
      -3,
      null,
      null,
      -9,
      -3,
      9,
      -7,
      -4,
      null,
      6,
      null,
      -6,
      -6,
      null,
      null,
      0,
      6,
      5,
      null,
      9,
      null,
      null,
      -1,
      -4,
      null,
      null,
      null,
      -2,
    ]
    const tree = fromArray(inputArr)
    const res = deserialize(serialize(tree))
    expect(toArray(res)).toEqual(inputArr)
  })
})
