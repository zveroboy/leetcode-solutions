import { getRow as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect(solution(3)).toEqual([1, 3, 3, 1])
  })
  it('case 2', () => {
    expect(solution(0)).toEqual([1])
  })
  it('case 3', () => {
    expect(solution(1)).toEqual([1, 1])
  })
})
