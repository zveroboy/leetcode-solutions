import { numSquares as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect<number>(solution(12)).toEqual<number>(3)
  })
  it('case 2', () => {
    expect<number>(solution(111)).toEqual<number>(4)
  })
})
