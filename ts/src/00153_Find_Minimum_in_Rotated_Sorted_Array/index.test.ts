import { findMin as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect(solution([3, 4, 5, 1, 2])).toBe(1)
  })
  it('case 2', () => {
    expect(solution([4, 5, 6, 7, 0, 1, 2])).toBe(0)
  })
  it('case 3', () => {
    expect(solution([7, 0, 1, 2, 4, 5, 6])).toBe(0)
  })
  it('case 4', () => {
    expect(solution([11, 13, 15, 17])).toBe(11)
  })
  it('case 5', () => {
    expect(solution([1])).toBe(1)
  })
  it('case 6', () => {
    expect(solution([2, 1])).toBe(1)
  })
  it('case 7', () => {
    expect(solution([1, 2])).toBe(1)
  })
  it('case 8', () => {
    expect(solution([5, 6, 1, 2, 3, 4])).toBe(1)
  })
})
