import { generate as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect(solution(5)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
    ])
  })
  it('case 2', () => {
    expect(solution(1)).toEqual([[1]])
  })
})
