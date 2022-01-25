import { rob as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect(solution([1, 2, 3, 1])).toEqual(4)
  })
  it('case 2', () => {
    expect(solution([2, 7, 9, 3, 1])).toEqual(12)
  })
  it('case 3', () => {
    expect(solution([8, 9, 9, 4, 10, 5, 6, 9, 7, 9])).toEqual(45)
  })
})
