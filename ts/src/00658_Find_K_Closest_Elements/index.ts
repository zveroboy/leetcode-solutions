import { assertIsFinite } from '../utils/assertations'

// import { binarySearch } from 'data/BinarySearch'
type Predicate = (start: number, mid: number, end: number) => boolean

const binarySearch = (predicate: Predicate) =>
  function* (length: number): Generator<number> {
    let start = 0
    let mid = 0
    let end = length - 1
    while (start + 1 < end) {
      mid = start + ((end - start) >> 1)
      yield mid
      if (predicate(start, mid, end)) {
        end = mid
      } else {
        start = mid
      }
    }
    yield start
    if (start !== end) yield end
  }

export function findClosestElements(
  arr: number[],
  k: number,
  x: number,
): number[] {
  const len = arr.length

  const taskPredicate = (a: number, b: number): boolean => {
    const da = Math.abs(a - x)
    const db = Math.abs(b - x)
    return da < db || (da === db && a < b)
  }

  let closest = -1
  for (const mid of binarySearch((_, mid) => {
    return arr[mid] > x
  })(len)) {
    assertIsFinite()
    const num = arr[mid]
    if (num === x) {
      closest = mid
      break
    }

    const closestNum = ~closest ? arr[closest] : Infinity
    if (
      (closestNum === num && closest < mid) ||
      taskPredicate(num, closestNum)
    ) {
      closest = mid
    }
  }

  let start = closest - k + 1
  start = start < 0 ? 0 : start

  let end = start + k - 1
  end = end > len - 1 ? len - 1 : end

  let i = 0
  for (; start + i < closest && end + i + 1 <= len - 1; i++) {
    if (taskPredicate(arr[start + i], arr[end + i + 1])) {
      break
    }
  }

  return arr.slice(start + i, end + i + 1)
}
