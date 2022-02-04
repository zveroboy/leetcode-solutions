import { ArrayReader, search as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    const reader = new ArrayReader([-1, 0, 3, 5, 9, 12])
    expect(solution(reader, 9)).toBe(4)
  })
  it('case 2', () => {
    const reader = new ArrayReader([-1, 0, 3, 5, 9, 12])
    expect(solution(reader, 2)).toBe(-1)
  })
})
