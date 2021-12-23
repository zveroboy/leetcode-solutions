import { findDisappearedNumbers as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect(solution([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6])
  })
  it('case 2', () => {
    expect(solution([1, 1])).toEqual([2])
  })
  it('case 3', () => {
    expect(solution([1, 1, 1, 1, 1])).toEqual([2, 3, 4, 5])
  })
})
