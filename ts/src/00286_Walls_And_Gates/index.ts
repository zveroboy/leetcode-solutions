import { Coord, getSize, isOutOfBounds, traverseMatrix } from '../data/Matrix'
import { Move } from '../data/Coords'
import { Queue } from '../data/Queue'
import { identity } from '../utils/identity'

const GATE = 0
const WALL = -1

const matrixValue =
  (mat: number[][]) =>
  ([row, cell]: Coord) =>
    mat[row][cell]
const isGate = (v: number): boolean => v === GATE
const isWall = (v: number): boolean => v === WALL

function assignSteps(rooms: number[][], coords: Coord): void {
  const [h, w] = getSize(rooms)
  const getMatrixValue = matrixValue(rooms)
  const visited = new Set<string>()
  const queue = new Queue<Coord>(w * h)
  let step = 0
  queue.enQueue(coords)
  visited.add(coords + '')

  const getAdjacent = function* ([row, cell]: Coord): Iterable<Coord> {
    for (const [dy, dx] of Object.values(Move)) {
      const adjCoords: Coord = [row + dy, cell + dx]
      if (isOutOfBounds(w, h, adjCoords)) {
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

  for (const coords of traverseMatrix(identity)(rooms)) {
    const value = getMatrixValue(coords)
    if (isGate(value)) {
      assignSteps(rooms, coords)
    }
  }
}
