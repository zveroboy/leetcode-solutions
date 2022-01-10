import { threeSum as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect(solution([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ])
  })
  it('case 2', () => {
    expect(solution([])).toEqual([])
  })
  it('case 3', () => {
    expect(solution([0])).toEqual([])
  })
  it('case 4', () => {
    expect(solution([0, 0, 0])).toEqual([[0, 0, 0]])
  })
  it('case 5', () => {
    expect(solution([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4])).toEqual([
      [-4, 0, 4],
      [-4, 1, 3],
      [-3, -1, 4],
      [-3, 0, 3],
      [-3, 1, 2],
      [-2, -1, 3],
      [-2, 0, 2],
      [-1, -1, 2],
      [-1, 0, 1],
    ])
  })
  it('case 6', () => {
    expect(solution([-2, -3, 0, 0, -2])).toEqual([])
  })
  it('case 7', () => {
    expect(solution([0, 0, 0])).toEqual([[0, 0, 0]])
  })
})
