import { getSize } from '../data/Matrix'
import { Queue } from '../data/Queue'

type Coords = [row: number, col: number]
const identity = <T>(v: T): T => v

const GATE = 0
const WALL = -1

function* traverseMatrix<T>(
  mat: number[][],
  fn: (coords: Coords) => T,
): Iterable<T> {
  const [h, w] = getSize(mat)
  for (let row = 0; row < h; row++) {
    for (let cell = 0; cell < w; cell++) {
      yield fn([row, cell])
    }
  }
}

const Move: Record<string, Coords> = Object.freeze({
  UP: [-1, 0],
  DOWN: [1, 0],
  LEFT: [0, -1],
  RIGHT: [0, 1],
})

const isOutOfBounds = (mat: number[][], [row, cell]: Coords): boolean => {
  const [h, w] = getSize(mat)
  return row < 0 || cell < 0 || row >= h || cell >= w
}

const matrixValue =
  (mat: number[][]) =>
  ([row, cell]: Coords) =>
    mat[row][cell]
const isGate = (v: number): boolean => v === GATE
const isWall = (v: number): boolean => v === WALL

function assignSteps(rooms: number[][], coords: Coords): void {
  const [h, w] = getSize(rooms)
  const getMatrixValue = matrixValue(rooms)
  const visited = new Set<string>()
  const queue = new Queue<Coords>(w * h)
  let step = 0
  queue.enQueue(coords)
  visited.add(coords + '')

  const getAdjacent = function* ([row, cell]: Coords): Iterable<Coords> {
    for (const [dy, dx] of Object.values(Move)) {
      const adjCoords: Coords = [row + dy, cell + dx]
      if (isOutOfBounds(rooms, adjCoords)) {
        continue
      }
      if (visited.has(adjCoords + '')) {
        continue
      }
      const value = getMatrixValue(adjCoords)
      if (isWall(value) || isGate(value)) {
        continue
      }
      yield adjCoords
    }
  }

  while (!queue.isEmpty()) {
    step++
    for (const { val: curCoords } of [...queue]) {
      if (curCoords) {
        for (const adjCoords of getAdjacent(curCoords)) {
          const [row, cell] = adjCoords
          rooms[row][cell] = Math.min(getMatrixValue(adjCoords), step)
          queue.enQueue(adjCoords)
          visited.add(adjCoords + '')
        }
      }
      queue.deQueue()
    }
  }
}

/**
 Do not return anything, modify rooms in-place instead.
 */
export default function wallsAndGates(rooms: number[][]): void {
  const [, w] = getSize(rooms)
  if (w === 0) {
    return
  }

  const getMatrixValue = matrixValue(rooms)

  for (const coords of traverseMatrix(rooms, identity)) {
    const value = getMatrixValue(coords)
    if (isGate(value)) {
      assignSteps(rooms, coords)
    }
  }
}
