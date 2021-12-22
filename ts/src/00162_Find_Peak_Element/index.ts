import { binarySearchLeftRight, Predicate } from '../data/BinarySearch'

export function findPeakElement(nums: number[]): number {
  const len = nums.length
  if (len < 2) {
    return 0
  }

  const getNeibours = (idx: number) => {
    const left = nums[idx - 1] ?? -Infinity
    const right = nums[idx + 1] ?? -Infinity
    return [left, right]
  }

  const predicate: Predicate = (_, mid) => {
    const num = nums[mid]
    const [, right] = getNeibours(mid)
    return num > right
  }

  for (const mid of binarySearchLeftRight(len, predicate)) {
    const num = nums[mid]
    const [left, right] = getNeibours(mid)
    if (left < num && num > right) {
      return mid
    }
  }

  throw new Error('not found')
}
