import { maxSubArray as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect(solution([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
  })
  it('case 2', () => {
    expect(solution([1])).toBe(1)
  })
  it('case 3', () => {
    expect(solution([5, 4, -1, 7, 8])).toBe(23)
  })
})
