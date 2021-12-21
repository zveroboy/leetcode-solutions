import { isHappy as solution } from '.'

describe(solution, () => {
  it.skip('case 1', () => {
    expect<boolean>(solution(19)).toBe(true)
  })
  it.skip('case 2', () => {
    expect<boolean>(solution(2)).toBe(false)
  })
  it('case 3', () => {
    expect<boolean>(solution(7)).toBe(true)
  })
})
