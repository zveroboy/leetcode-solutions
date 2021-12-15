import { dailyTemperatures as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect(solution([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([
      1, 1, 4, 2, 1, 1, 0, 0,
    ])
  })
  it('case 2', () => {
    expect(solution([30, 40, 50, 60])).toEqual([1, 1, 1, 0])
  })
  it('case 3', () => {
    expect(solution([30, 60, 90])).toEqual([1, 1, 0])
  })
})
