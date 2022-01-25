import { tribonacci as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect(solution(4)).toEqual(4)
  })
  it('case 2', () => {
    expect(solution(25)).toEqual(1_389_537)
  })
})
