import { deleteAndEarn as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect(solution([3, 4, 2])).toBe(6)
  })
  it('case 2', () => {
    expect(solution([2, 2, 3, 3, 3, 4])).toBe(9)
  })
  it('case 3', () => {
    expect(solution([8, 10, 4, 9, 1, 3, 5, 9, 4, 10])).toBe(37)
  })
})
