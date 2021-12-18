import { fib as solution } from '.'

describe(solution, () => {
  it('case 2', () => {
    expect<number>(solution(2)).toEqual<number>(1)
  })
  it('case 3', () => {
    expect<number>(solution(3)).toEqual<number>(2)
  })
  it('case 4', () => {
    expect<number>(solution(4)).toEqual<number>(3)
  })
  it('case 10', () => {
    expect<number>(solution(10)).toEqual<number>(55)
  })
})
