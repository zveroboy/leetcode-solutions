import { binarySearch } from '../data/BinarySearch'

// Generator solition
export function search(nums: number[], target: number): number {
  const predicate = (num: number): boolean => num > target
  for (const mid of binarySearch(nums, predicate)) {
    const num = nums[mid]
    if (num === target) {
      return mid
    }
  }
  return -1
}

// Basic solution
// export function search(nums: number[], target: number): number {
//   let from = -1
//   let to = nums.length
//   while (1 + from < to) {
//     const mid = from + ((to - from) >> 1)

//     const num = nums[mid]
//     if (num === target) {
//       return mid
//     }

//     if (num > target) {
//       to = mid
//     } else {
//       from = mid
//     }
//   }
//   return -1
// }
