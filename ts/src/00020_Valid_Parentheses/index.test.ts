import solution from '.'

describe('should solve', () => {
  it('case 1', () => {
    expect(solution('()')).toBe(true)
  })
  it('case 2', () => {
    expect(solution('()[]{}')).toBe(true)
  })
  it('case 3', () => {
    expect(solution('(]')).toBe(false)
  })
  it('case 4', () => {
    expect(solution('([)]')).toBe(false)
  })
  it('case 5', () => {
    expect(solution('{[]}')).toBe(true)
  })
})
