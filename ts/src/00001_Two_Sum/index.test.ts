import { twoSum as solution } from '.'

describe(solution, () => {
  it('should solve', () => {
    expect(solution([2, 7, 11, 15], 9)).toEqual([0, 1])
    expect(solution([3, 2, 4], 6)).toEqual([1, 2])
    expect(solution([3, 3], 6)).toEqual([0, 1])
  })
})
