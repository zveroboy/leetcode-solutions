import { binarySearch } from '../data/BinarySearch'
import { Coords } from '../data/Matrix'
import { martixGen } from '../data/Coords'

const koef = 1e8

export function mySqrt(x: number): number {
  if (x === 0) {
    return 0
  }
  if (x === 1) {
    return 1
  }

  const prec = x * koef
  let from = 0
  let to = prec

  while (1 + from < to) {
    const mid = from + Math.floor((to - from) / 2)

    const temp = mid * mid

    if (Math.abs(x * koef ** 2 - temp) / koef ** 2 < 1e-2) {
      return Math.floor(mid / koef)
    }

    if (temp > prec * koef) {
      to = mid
    } else {
      from = mid
    }
  }

  throw new Error('Something went wrong')
}
