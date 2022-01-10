import { fromArray, toArray } from '../data/NaryTree'
import { Codec, Codec as solution } from '.'

describe(solution, () => {
  const solution = new Codec()
  it('case 1', () => {
    const input = [1, null, 3, 2, 4, null, 5, 6]
    const root = fromArray(input)
    const result = solution.deserialize(solution.serialize(root))
    expect(toArray(result)).toEqual([1, null, 3, 2, 4, null, 5, 6])
  })

  it('case 2', () => {
    const input = [
      1,
      null,
      2,
      3,
      4,
      5,
      null,
      null,
      6,
      7,
      null,
      8,
      null,
      9,
      10,
      null,
      null,
      11,
      null,
      12,
      null,
      13,
      null,
      null,
      14,
    ]
    const root = fromArray(input)
    const result = solution.deserialize(solution.serialize(root))
    expect(toArray(result)).toEqual(input)
  })
})
