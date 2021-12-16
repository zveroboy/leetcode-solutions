import { mySqrt as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect(solution(4)).toBe(2)
  })
  it('case 2', () => {
    expect(solution(8)).toBe(2)
  })
  it('case 3', () => {
    expect(solution(1)).toBe(1)
  })
  it('case 4', () => {
    expect(solution(0)).toBe(0)
  })
  it('case 5', () => {
    expect(solution(2)).toBe(1)
  })
  it('case 6', () => {
    expect(solution(9)).toBe(3)
  })
  it('case 7', () => {
    expect(solution(2147395599)).toBe(46339)
  })
  it('case 8', () => {
    expect(solution(8192)).toBe(90)
  })
})
