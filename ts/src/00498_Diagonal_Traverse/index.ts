import { Matrix, getSize } from '../data/Matrix'

const getDiagRows = (mat: Matrix) => {
  const [h, w] = getSize(mat)
  const max = Math.max(w, h)
  const min = Math.min(w, h)

  return max + min - 1
}

const readMat = function* (mat: Matrix): IterableIterator<number> {
  const [h, w] = getSize(mat)
  const rows = getDiagRows(mat)

  for (let r = 0; r < rows; r++) {
    const dir = r % 2
    const d = (-1) ** (r % 2)
    const ly = Math.min(r, h - 1)
    const lx = Math.min(r, w - 1)
    let x = dir ? lx : r - ly
    let y = dir ? r - lx : ly
    while (x >= 0 && x <= lx && y >= 0 && y <= ly) {
      yield mat[y][x]
      x += d
      y -= d
    }
  }
}

export default function (mat: number[][]): number[] {
  return [...readMat(mat)]
}
