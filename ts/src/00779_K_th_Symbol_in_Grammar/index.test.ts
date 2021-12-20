import { kthGrammar as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect<number>(solution(1, 1)).toEqual<number>(0)
  })
  it('case 2', () => {
    expect<number>(solution(2, 1)).toEqual<number>(0)
  })
  it('case 3', () => {
    expect<number>(solution(2, 2)).toEqual<number>(1)
  })
  it('case 4', () => {
    expect<number>(solution(3, 1)).toEqual<number>(0)
  })
  it('case 5', () => {
    expect<number>(solution(4, 5)).toEqual<number>(1)
  })
  it('case 5a', () => {
    expect<number>(solution(4, 14)).toEqual<number>(1)
  })
  it('case 6', () => {
    expect<number>(solution(30, 434991989)).toEqual<number>(0)
  })
})
