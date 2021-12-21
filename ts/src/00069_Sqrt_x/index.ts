import { binarySearch, Predicate } from '../data/BinarySearch'

const koef = 1e8

export function mySqrt(x: number): number {
  if (x === 0) {
    return 0
  }
  if (x === 1) {
    return 1
  }

  const prec = x * koef

  const predicate: Predicate = (_, mid) => mid * mid > prec * koef

  for (const mid of binarySearch(prec, predicate)) {
    const temp = mid * mid

    if (Math.abs(x * koef ** 2 - temp) / koef ** 2 < 1e-2) {
      return Math.floor(mid / koef)
    }
  }

  throw new Error('Something went wrong')
}
