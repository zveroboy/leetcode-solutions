import { assertIsFinite } from '../utils/assertations'

const LIMIT = 1e4
const OUT_OF_RANGE = 2 ** 31 - 1

export class ArrayReader {
  constructor(private nums: number[]) {}
  get(index: number): number {
    return this.nums[index] ?? OUT_OF_RANGE
  }
}

type Predicate = (left: number, mid: number, right: number) => boolean

const binarySearch = (predicate: Predicate) =>
  function* (length: number): Generator<number> {
    let left = -1
    let right = length - 1
    while (left + 1 < right) {
      const mid = left + ((right - left) >> 1)

      yield mid

      if (predicate(left, mid, right)) {
        right = mid
      } else {
        left = mid
      }
    }

    yield left
    if (left != right) yield right
  }

export function search(reader: ArrayReader, target: number): number {
  let top = -1
  const topBS = binarySearch((_, mid) => reader.get(mid) === OUT_OF_RANGE)
  for (const mid of topBS(LIMIT)) {
    assertIsFinite()
    const num = reader.get(mid)
    if (num === target) {
      return mid
    }
    if (num < OUT_OF_RANGE && reader.get(mid + 1) === OUT_OF_RANGE) {
      top = mid
    }
  }

  if (top < 0) {
    return -1
  }

  const targetBS = binarySearch((_, mid) => reader.get(mid) > target)
  for (const mid of targetBS(top + 1)) {
    assertIsFinite()
    const num = reader.get(mid)
    if (num === target) {
      return mid
    }
    if (num < OUT_OF_RANGE && reader.get(mid + 1) === OUT_OF_RANGE) {
      top = mid
    }
  }

  return -1
}
