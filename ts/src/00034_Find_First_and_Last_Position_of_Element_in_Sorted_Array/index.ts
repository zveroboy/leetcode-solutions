type Predicate = (start: number, mid: number, end: number) => boolean

const binarySearch = (predicate: Predicate) =>
  function* (length: number): Generator<number> {
    let start = 0
    let mid = 0
    let end = length - 1
    while (start + 1 < end) {
      mid = start + ((end - start) >> 1)
      console.log({ start, mid, end })
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

export function searchRange(nums: number[], target: number): number[] {
  const result = [-1, -1]

  const len = nums.length
  for (const mid of binarySearch((_, mid) => nums[mid] >= target)(len)) {
    console.log({ mid })

    const num = nums[mid]
    if (num === target && (mid - 1 < 0 || nums[mid - 1] < target)) {
      result[0] = mid
      break
    }
  }
  for (const mid of binarySearch((_, mid) => nums[mid] > target)(len)) {
    const num = nums[mid]
    if (num === target && (mid + 1 >= len || nums[mid + 1] > target)) {
      result[1] = mid
      break
    }
  }

  return result
}
