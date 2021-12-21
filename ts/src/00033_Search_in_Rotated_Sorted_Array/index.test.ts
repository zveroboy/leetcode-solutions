import { search as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect<number>(solution([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4)
  })
  it('case 2', () => {
    expect<number>(solution([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1)
  })
  it('case 3', () => {
    expect<number>(solution([4, 5, 6, 7, 0, 1, 2], 5)).toBe(1)
  })
  it('case 4', () => {
    expect<number>(solution([4, 5, 6, 7, 0, 1, 2], 2)).toBe(6)
  })
  it('case 5', () => {
    expect<number>(solution([1], 0)).toBe(-1)
  })
  it('case 6', () => {
    expect<number>(solution([3, 5, 1], 3)).toBe(0)
  })
  it('case 7', () => {
    expect<number>(solution([3, 5, 1], 1)).toBe(2)
  })
  it('case 8', () => {
    expect<number>(solution([5, 1, 3], 5)).toBe(0)
  })
  it('case 9', () => {
    expect<number>(solution([5, 1, 3], 3)).toBe(2)
  })
  it('case 10', () => {
    expect<number>(solution([4, 5, 6, 7, 8, 1, 2, 3], 8)).toBe(4)
  })
})
