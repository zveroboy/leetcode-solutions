import { search as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect(solution([-1, 0, 3, 5, 9, 12], 9)).toEqual(4)
  })
  it('case 2', () => {
    expect(solution([-1, 0, 3, 5, 9, 12], 2)).toEqual(-1)
  })
})
