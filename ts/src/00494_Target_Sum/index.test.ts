import { findTargetSumWays as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect(solution([1, 1, 1, 1, 1], 3)).toBe(5)
  })
  it('case 2', () => {
    expect(solution([1, 1], 0)).toBe(2)
  })
  it('case 3', () => {
    expect(solution([1], 1)).toBe(1)
  })
  it('case 4', () => {
    expect(solution([0, 0, 0, 0, 0, 0, 0, 0, 1], 1)).toBe(256)
  })
})
