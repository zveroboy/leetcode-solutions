import {
  add,
  Coord,
  getSize,
  isOutOfBounds,
  traverseMatrix,
} from '../data/Matrix'
import { identity } from '../utils/identity'
import { Move } from '../data/Coords'

const createVisited = () => {
  const visited = new Set<string>()

  return {
    checkVisited(key: string): boolean {
      return visited.has(key)
    },
    visit(key: string) {
      visited.add(key)
    },
  }
}

const getAdjacentCoords = (coords: Coord): Coord[] => {
  return Object.values(Move).reduce<Coord[]>((acc, delta) => {
    acc.push(add(coords, delta))
    return acc
  }, [])
}

const traverse =
  <T>(getAdjacentsFn: (item: T) => T[]) =>
  (initial: T) => {
    const queue: T[] = [initial]
    while (queue.length) {
      getAdjacentsFn(queue[0]).forEach((item) => queue.push(item))
      queue.shift()
    }
  }

export function numIslands(grid: string[][]): number {
  let result = 0

  const [height, width] = getSize(grid)

  const checkIsLand = ([row, cell]: Coord) => {
    const val = +grid[row][cell]
    return !!val
  }

  const { checkVisited, visit } = createVisited()

  const getAdjacents = (coord: Coord) => {
    visit(coord + '')
    return getAdjacentCoords(coord)
      .filter((coord) => !isOutOfBounds(width, height, coord))
      .filter((coord) => !checkVisited(coord + ''))
      .filter(checkIsLand)
      .map((coord) => {
        visit(coord + '')
        return coord
      })
  }

  const traverseIsland = traverse(getAdjacents)

  for (const coord of traverseMatrix(identity)(grid)) {
    if (!checkIsLand(coord)) {
      continue
    }
    if (checkVisited(coord + '')) {
      continue
    }
    result++
    traverseIsland(coord)
  }

  return result
}
