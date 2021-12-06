import solution from '.'

describe('should solve', () => {
  it('case 1', () => {
    expect(solution(3)).toEqual([1, 3, 3, 1])
    expect(solution(0)).toEqual([1])
    expect(solution(1)).toEqual([1, 1])
  })
})
