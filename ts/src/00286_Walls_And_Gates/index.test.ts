import { INF } from '../data/const'
import solution from '.'

describe('should solve', () => {
  it('case 1', () => {
    const mat = [
      [INF, -1, 0, INF],
      [INF, INF, INF, -1],
      [INF, -1, INF, -1],
      [0, -1, INF, INF],
    ]
    solution(mat)
    expect(mat).toEqual([
      [3, -1, 0, 1],
      [2, 2, 1, -1],
      [1, -1, 2, -1],
      [0, -1, 3, 4],
    ])
  })
  it('case 2', () => {
    const mat = [[-1]]
    solution(mat)
    expect(mat).toEqual([[-1]])
  })
  it('case 3', () => {
    const mat = [[INF]]
    solution(mat)
    expect(mat).toEqual([[INF]])
  })
  it('case 4', () => {
    const mat = [[0]]
    solution(mat)
    expect(mat).toEqual([[0]])
  })
  it('case 5', () => {
    const mat = [
      [INF],
      [0],
      [INF],
      [0],
      [INF],
      [-1],
      [INF],
      [0],
      [0],
      [INF],
      [INF],
      [0],
      [INF],
    ]
    solution(mat)
    expect(mat).toEqual([
      [1],
      [0],
      [1],
      [0],
      [1],
      [-1],
      [1],
      [0],
      [0],
      [1],
      [1],
      [0],
      [1],
    ])
  })
})
