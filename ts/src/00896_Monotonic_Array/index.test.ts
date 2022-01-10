import { isMonotonic as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect(solution([1, 2, 2, 3])).toBe(true)
  })
  it('case 2', () => {
    expect(solution([6, 5, 4, 4])).toBe(true)
  })
  it('case 3', () => {
    expect(solution([1, 3, 2])).toBe(false)
  })
})
