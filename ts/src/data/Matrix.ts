export type Matrix = number[][]
export function getSize(mat: Matrix): [height: number, width: number] {
  return [mat.length, mat[0]?.length ?? 0]
}
