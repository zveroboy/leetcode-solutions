import { singleNumber as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect<number>(solution([2, 2, 1])).toBe<number>(1)
  })
  it('case 2', () => {
    expect<number>(solution([4, 1, 2, 1, 2])).toBe<number>(4)
  })
  it('case 3', () => {
    expect<number>(solution([1])).toBe<number>(1)
  })
})
