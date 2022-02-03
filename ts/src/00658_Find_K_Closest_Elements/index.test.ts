import { findClosestElements as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect(solution([1, 2, 4, 5, 6, 7, 8], 4, 3)).toEqual([1, 2, 4, 5])
  })
  it('case 2', () => {
    expect(solution([1, 2, 3, 4, 5], 4, 3)).toEqual([1, 2, 3, 4])
  })
  it('case 3', () => {
    expect(solution([1, 2, 3, 4, 5], 4, 8)).toEqual([2, 3, 4, 5])
  })
  it('case 4', () => {
    expect(solution([1, 2, 3, 4, 5], 4, -1)).toEqual([1, 2, 3, 4])
  })
  it('case 5', () => {
    expect(solution([0, 0, 0, 1, 3, 5, 6, 7, 8, 8], 2, 2)).toEqual([1, 3])
  })
  it('case 6', () => {
    expect(solution([1, 2, 3, 3, 6, 6, 7, 7, 9, 9], 8, 8)).toEqual([
      3, 3, 6, 6, 7, 7, 9, 9,
    ])
  })
})
