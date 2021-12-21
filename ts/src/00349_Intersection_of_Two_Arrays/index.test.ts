import { intersection as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect<number[]>(solution([1, 2, 2, 1], [2, 2])).toEqual<number[]>([2])
  })
  it('case 2', () => {
    expect<number[]>(solution([4, 9, 5], [9, 4, 9, 8, 4])).toEqual<number[]>([
      4, 9,
    ])
  })
})
