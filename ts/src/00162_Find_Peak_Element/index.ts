import { binarySearchLeftRight, Predicate } from '../data/BinarySearch'

export function findPeakElement(nums: number[]): number {
  const len = nums.length
  if (len < 2) {
    return 0
  }

  const getNeighbors = (idx: number) => {
    const left = nums[idx - 1] ?? -Infinity
    const right = nums[idx + 1] ?? -Infinity
    return [left, right]
  }

  const predicate: Predicate = (_, mid) => {
    const num = nums[mid]
    const [, right] = getNeighbors(mid)
    return num > right
  }

  const bs = binarySearchLeftRight(predicate)

  for (const mid of bs(len)) {
    const num = nums[mid]
    const [left, right] = getNeighbors(mid)
    if (left < num && num > right) {
      return mid
    }
  }

  throw new Error('not found')
}
