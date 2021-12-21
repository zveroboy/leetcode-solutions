import { Coord, add, isOutOfBounds, getSize } from '../data/Matrix'
import { Move } from '../data/Coords'

const getAdjacentCoords = (coord: Coord): Coord[] => {
  return Object.values(Move).map((delta) => add(coord, delta))
}

const createVisited = () => {
  const visited = new Set<string>()
  return {
    isVisited: (key: string) => visited.has(key),
    visit: (key: string) => visited.add(key),
  }
}

const traverse =
  (getAdjacentsFn: (coord: Coord) => Coord[]) => (initial: Coord) => {
    const queue: Coord[] = [initial]
    while (queue.length) {
      getAdjacentsFn(queue[0]).forEach((coord) => queue.push(coord))
      queue.shift()
    }
  }

export function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number,
): number[][] {
  const [h, w] = getSize(image)

  const { visit, isVisited } = createVisited()

  const initColor = image[sr][sc]

  const getAdjacentsFn = ([r, c]: Coord): Coord[] => {
    image[r][c] = newColor

    return getAdjacentCoords([r, c])
      .filter((coord) => !isVisited(coord + ''))
      .filter((coord) => !isOutOfBounds(w, h, coord))
      .filter(([r1, c1]) => initColor === image[r1][c1])
      .map(([r1, c1]) => {
        visit([r1, c1] + '')
        return [r1, c1]
      })
  }

  traverse(getAdjacentsFn)([sr, sc])

  return image
}
