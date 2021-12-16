export type Coords = [row: number, col: number]
export type Matrix = number[][]

export function getSize(mat: Matrix): [height: number, width: number] {
  return [mat.length, mat[0]?.length ?? 0]
}
export const isOutOfBounds = (
  width: number,
  height: number,
  [row, cell]: Coords,
): boolean => {
  return row < 0 || cell < 0 || row >= height || cell >= width
}

export const add = (coordsA: Coords, coordsB: Coords): Coords => {
  return [coordsA[0] + coordsB[0], coordsA[1] + coordsB[1]]
}
export const compare = (coordsA: Coords, coordsB: Coords): boolean => {
  return coordsA[0] === coordsB[0] && coordsA[1] === coordsB[1]
}

export const range = function * (from: number, to: number){
  while(from <= to) yield from++
}
