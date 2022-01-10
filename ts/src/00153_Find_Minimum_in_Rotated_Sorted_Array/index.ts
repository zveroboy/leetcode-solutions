import { binarySearch, Predicate } from '../data/BinarySearch'

export function findMin(nums: number[]): number {
  const len = nums.length
  if (len < 2) {
    return nums[0]
  }

  if (nums[0] < nums[len - 1]) {
    return nums[0]
  }

  const getNeibours = (idx: number) => {
    const left = nums[idx - 1] ?? Infinity
    const right = nums[idx + 1] ?? Infinity
    return [left, right]
  }

  const predicate: Predicate = (from, mid, to) => {
    const left = nums[from]
    const num = nums[mid]
    const right = nums[to] ?? nums[to - 1]
    return left < right || num < left
  }

  for (const mid of binarySearch(len, predicate)) {
    const num = nums[mid]
    const [left, right] = getNeibours(mid)
    if (left > num && num < right) {
      return num
    }
  }

  throw new Error('not found')
}
