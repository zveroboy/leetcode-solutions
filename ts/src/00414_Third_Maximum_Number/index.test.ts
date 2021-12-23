import { thirdMax as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect(solution([3, 2, 1])).toBe(1)
  })
  it('case 2', () => {
    expect(solution([1, 2])).toBe(2)
  })
  it('case 3', () => {
    expect(solution([2, 2, 3, 1])).toBe(1)
  })
})
