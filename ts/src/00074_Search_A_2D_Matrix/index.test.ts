import { searchMatrix as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect(
      solution(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        3,
      ),
    ).toEqual(true)
  })
  it('case 2', () => {
    expect(
      solution(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        13,
      ),
    ).toEqual(false)
  })
})
