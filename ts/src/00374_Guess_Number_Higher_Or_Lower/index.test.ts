import { pick as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    const guessNumber = solution(6)
    expect(guessNumber(10)).toBe(6)
  })
  it('case 2', () => {
    const guessNumber = solution(1)
    expect(guessNumber(1)).toBe(1)
  })
  it('case 3', () => {
    const guessNumber = solution(1)
    expect(guessNumber(2)).toBe(1)
  })
  it('case 4', () => {
    const guessNumber = solution(2)
    expect(guessNumber(2)).toBe(2)
  })
  it('case 5', () => {
    const guessNumber = solution(4)
    expect(guessNumber(4)).toBe(4)
  })
})
