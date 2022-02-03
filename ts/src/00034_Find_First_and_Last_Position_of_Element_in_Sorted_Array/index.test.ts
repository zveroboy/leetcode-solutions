import { searchRange as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect(solution([5, 7, 7, 8, 8, 8, 8, 10], 8)).toEqual([3, 6])
  })
  it('case 2', () => {
    expect(solution([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1])
  })
  it('case 3', () => {
    expect(solution([], 0)).toEqual([-1, -1])
  })
  it('case 4', () => {
    expect(solution([1], 1)).toEqual([0, 0])
  })
})
