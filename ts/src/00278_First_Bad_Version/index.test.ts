import { solution, MAX } from '.'

const isBadVersion = (version: number) => (attempt: number) =>
  attempt >= version

describe(solution, () => {
  it.skip('case 1', () => {
    const badVersion = 4
    const checker = solution(isBadVersion(badVersion))
    expect(checker(5)).toBe(badVersion)
    expect(checker(4)).toBe(badVersion)
  })
  it.skip('case 2', () => {
    const badVersion = 2
    const checker = solution(isBadVersion(badVersion))
    expect(checker(2)).toBe(badVersion)
  })
  it.skip('case 3', () => {
    const badVersion = 1
    const checker = solution(isBadVersion(badVersion))
    expect(checker(1)).toBe(badVersion)
  })
  it('case 4', () => {
    const badVersion = MAX - 5
    const checker = solution(isBadVersion(badVersion))
    expect(checker(MAX)).toBe(badVersion)
  })
})
