import { binarySearch } from '../data/BinarySearch'
import { Coord } from '../data/Matrix'
import { martixGen } from '../data/Coords'

export function searchMatrix(matrix: number[][], target: number): boolean {
  const coords = [...martixGen([0, 0], [matrix[0].length, matrix.length])]

  const predicate = ([r, c]: Coord): boolean => matrix[r][c] > target

  for (const mid of binarySearch(coords, predicate)) {
    const [y, x] = coords[mid]
    const num = matrix[y][x]
    if (num === target) {
      return true
    }
  }
  return false
}
