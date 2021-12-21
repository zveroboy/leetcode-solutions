import { binarySearch, Predicate } from '../data/BinarySearch'
import { martixGen } from '../data/Coords'

export function searchMatrix(matrix: number[][], target: number): boolean {
  const coords = [...martixGen([0, 0], [matrix[0].length, matrix.length])]

  const predicate: Predicate = (_, mid): boolean => {
    const [r, c] = coords[mid]
    return matrix[r][c] > target
  }

  for (const mid of binarySearch(coords.length - 1, predicate)) {
    const [y, x] = coords[mid]
    const num = matrix[y][x]
    if (num === target) {
      return true
    }
  }
  return false
}
