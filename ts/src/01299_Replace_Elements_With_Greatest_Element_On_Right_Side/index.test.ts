import solution from '.'

describe('should solve', () => {
  it('case 1', () => {
    expect(solution([17, 18, 5, 4, 6, 1])).toEqual([18, 6, 6, 6, 1, -1])
    expect(solution([400])).toEqual([-1])
  })
})
