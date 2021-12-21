import { binarySearch, Predicate } from '../data/BinarySearch'

export function search(nums: number[], target: number): number {
  if (nums.length === 0) return -1
  const predicate: Predicate = (from, mid, to) => {
    const num = nums[mid]
    const isRotated = nums[from] > nums[to]
    if (isRotated) {
      return (
        (num > nums[from] && num > target && target >= nums[from]) ||
        (num < nums[from] &&
          ((num < target && target >= nums[from]) || num > target))
      )
    } else {
      return num > target
    }
  }
  for (const mid of binarySearch(nums.length - 1, predicate)) {
    const num = nums[mid]
    if (num === target) {
      return mid
    }
  }
  return -1
}
