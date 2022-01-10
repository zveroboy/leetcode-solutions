export function isMonotonic(nums: number[]): boolean {
  let isInc = true
  let isDecr = true
  const len = nums.length

  for (let i = 1; i < len; i++) {
    isInc &&= nums[i - 1] <= nums[i]
    isDecr &&= nums[i - 1] >= nums[i]
  }

  return isInc || isDecr
}

export function isMonotonicCompare(nums: number[]): boolean {
  let dir = true
  const len = nums.length
  if (len < 2) {
    return dir
  }

  const gte = (a: number, b: number) => a >= b
  const lte = (a: number, b: number) => a <= b
  const compare = nums[0] < nums[len - 1] ? lte : gte

  for (let i = 1; i < len; i++) {
    dir &&= compare(nums[i - 1], nums[i])
    if (!dir) {
      return false
    }
  }

  return true
}

export function isMonotonicDir(nums: number[]): boolean {
  let dir = 0
  const len = nums.length
  if (len < 2) {
    return true
  }
  for (let i = 1; i < len; i++) {
    const diff = nums[i] - nums[i - 1]
    if (dir === 0) {
      dir = Math.sign(diff)
    }
    if ((dir < 0 && diff > 0) || (dir > 0 && diff < 0)) {
      return false
    }
  }

  return true
}
