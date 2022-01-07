export type Matrix = number[][]
export type Coord = [row: number, col: number]

export function getSize<T>(mat: T[][]): [height: number, width: number] {
  return [mat.length, mat[0]?.length ?? 0]
}

export const isOutOfBounds = (
  width: number,
  height: number,
  [row, cell]: Coord,
): boolean => {
  return row < 0 || cell < 0 || row >= height || cell >= width
}

export const isOutOfBounds2 =
  (rows: number, cols: number) =>
  ([row, cell]: Coord): boolean => {
    return row < 0 || cell < 0 || row >= rows || cell >= cols
  }

export const add = (coordsA: Coord, coordsB: Coord): Coord => {
  return [coordsA[0] + coordsB[0], coordsA[1] + coordsB[1]]
}
export const compare = (coordsA: Coord, coordsB: Coord): boolean => {
  return coordsA[0] === coordsB[0] && coordsA[1] === coordsB[1]
}

export const range = function* (from: number, to: number) {
  while (from <= to) yield from++
}

export const traverseMatrix = <T, R>(fn: (coords: Coord) => R) =>
  function* (mat: T[][]): Generator<R> {
    const [h, w] = getSize(mat)
    for (let row = 0; row < h; row++) {
      for (let cell = 0; cell < w; cell++) {
        yield fn([+row, +cell])
      }
    }
  }
