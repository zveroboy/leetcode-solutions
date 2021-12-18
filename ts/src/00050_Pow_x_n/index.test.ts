import { myPow as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect<number>(solution(2.0, 10)).toBeCloseTo(1024)
  })
  it('case 2', () => {
    expect<number>(solution(2.1, 3)).toBeCloseTo(9.261)
  })
  it('case 3', () => {
    expect<number>(solution(2.0, -2)).toBeCloseTo(0.25)
  })
  it('case 4', () => {
    expect<number>(solution(0.00001, 2147483647)).toBeCloseTo(0)
  })
})
