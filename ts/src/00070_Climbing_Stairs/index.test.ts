import { climbStairs as solution } from '.'

describe(solution, () => {
  it('case 2', () => {
    expect<number>(solution(2)).toEqual<number>(2)
  })
  it('case 3', () => {
    expect<number>(solution(3)).toEqual<number>(3)
  })
  it('case 4', () => {
    expect<number>(solution(4)).toEqual<number>(5)
  })
  it('case 35', () => {
    expect<number>(solution(35)).toEqual<number>(8)
  })
})
