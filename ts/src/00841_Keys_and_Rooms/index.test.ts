import { canVisitAllRooms as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect<boolean>(solution([[1], [2], [3], []])).toBe(true)
  })
  it('case 2', () => {
    expect<boolean>(solution([[1, 3], [3, 0, 1], [2], [0]])).toBe(false)
  })
})
