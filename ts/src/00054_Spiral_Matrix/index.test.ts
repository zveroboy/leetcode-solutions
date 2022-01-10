import { spiralOrder as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect(
      solution([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])
  })
  it('case 2', () => {
    expect(
      solution([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
      ]),
    ).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7])
  })
  it('case 3', () => {
    expect(
      solution([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [10, 11, 12],
      ]),
    ).toEqual([1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8])
  })
})
