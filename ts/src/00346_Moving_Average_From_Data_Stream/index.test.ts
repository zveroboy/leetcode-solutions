import { MovingAverage } from '.'

describe('should solve', () => {
  it('case 1', () => {
    const movingAverage = new MovingAverage(3)
    expect(movingAverage.next(1)).toBeCloseTo(1.0) // return 1.0 = 1 / 1
    expect(movingAverage.next(10)).toBeCloseTo(5.5) // return 5.5 = (1 + 10) / 2
    expect(movingAverage.next(3)).toBeCloseTo(4.66667) // return 4.66667 = (1 + 10 + 3) / 3
    expect(movingAverage.next(5)).toBeCloseTo(6.0) // return 6.0 = (10 + 3 + 5) / 3
  })
})
