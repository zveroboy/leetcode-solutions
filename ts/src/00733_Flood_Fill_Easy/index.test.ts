import { floodFill as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect<number[][]>(
      solution(
        [
          [1, 1, 1],
          [1, 1, 0],
          [1, 0, 1],
        ],
        1,
        1,
        2,
      ),
    ).toEqual<number[][]>([
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ])
  })
  it('case 2', () => {
    expect<number[][]>(
      solution(
        [
          [0, 0, 0],
          [0, 0, 0],
        ],
        0,
        0,
        2,
      ),
    ).toEqual<number[][]>([
      [2, 2, 2],
      [2, 2, 2],
    ])
  })
})
