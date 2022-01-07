import { isSubsequence as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect(solution('abc', 'ahbgdc')).toBe(true)
  })
  it('case 2', () => {
    expect(solution('axc', 'ahbgdc')).toBe(false)
  })
  it('case 3', () => {
    expect(solution('b', 'abc')).toBe(true)
  })
  it('case 4', () => {
    expect(solution('', 'ahbgdc')).toBe(true)
  })
  it('case 5', () => {
    expect(solution('', '')).toBe(true)
  })
})
