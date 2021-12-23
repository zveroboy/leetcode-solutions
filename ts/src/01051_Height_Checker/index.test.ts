import { heightChecker as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect(solution([1, 1, 4, 2, 1, 3])).toBe(3)
  })
  it('case 2', () => {
    expect(solution([5, 1, 2, 3, 4])).toBe(5)
  })
  it('case 3', () => {
    expect(solution([1, 2, 3, 4, 5])).toBe(0)
  })
})
