import solution from '.'

describe('should solve', () => {
  it('case 1', () => {
    expect(solution([10, 2, 5, 3])).toBe(true)
    expect(solution([7, 1, 14, 11])).toBe(true)
    expect(solution([-7, 1, -14, 11])).toBe(true)
    expect(solution([3, 1, 7, 11])).toBe(false)
    expect(solution([4, -7, 11, 4, 18])).toBe(false)
  })
})
