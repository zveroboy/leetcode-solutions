import {
  Coord,
  add,
  isOutOfBounds2,
  getSize,
  traverseMatrix,
} from '../data/Matrix'
import { Move } from '../data/Coords'

let lim = 0

const nextMove = (coord1: Coord) => {
  return Object.values(Move).map((coord2) => add(coord1, coord2))
}

class BFS<T> {
  queue: T[] = []
  enqueue(item: T) {
    this.queue.push(item)
  }
  *[Symbol.iterator]() {
    while (this.queue.length) {
      if (lim++ > 20000) throw new Error('too much')
      const item = this.queue.shift()
      if (!item) throw new Error('Something went wrong')
      yield item
    }
  }
}

export function updateMatrix(mat: number[][]): number[][] {
  const [h, w] = getSize(mat)

  const checkIsOutOfBounds = (coord: Coord) => !isOutOfBounds2(h, w)(coord)
  const isZero = ([r, c]: Coord): boolean => mat[r][c] === 0

  const result: number[][] = Array(h)
    .fill([])
    .map(() => Array(w).fill(Infinity))

  const getNeighbours = (c: Coord) => nextMove(c).filter(checkIsOutOfBounds)

  const bfs = new BFS<Coord>()

  for (const coord of traverseMatrix((c) => c)(mat)) {
    if (isZero(coord)) {
      const [r, c] = coord
      result[r][c] = 0
      bfs.enqueue(coord)
      continue
    }
  }

  for (const coord of bfs) {
    const [r, c] = coord
    const neighbourDist = result[r][c] + 1
    getNeighbours(coord).forEach(([r, c]) => {
      if (neighbourDist < result[r][c]) {
        result[r][c] = neighbourDist
        bfs.enqueue([r, c])
      }
    })
  }

  return result
}
