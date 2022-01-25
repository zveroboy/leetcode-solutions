import { minCostClimbingStairs as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect(solution([10, 15, 20])).toEqual(15)
  })
  it('case 2', () => {
    expect(solution([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toEqual(6)
  })
  it('case 3', () => {
    expect(solution([0, 0, 0, 1])).toEqual(0)
  })
  it('case 4', () => {
    expect(solution([1, 0, 0, 0])).toEqual(0)
  })
  it('case 5', () => {
    expect(solution([1, 100])).toEqual(1)
  })
  it('case 6', () => {
    expect(solution([100, 1])).toEqual(1)
  })
})
