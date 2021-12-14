export function maxSubArray(nums: number[]): number {
  let localSubArrayMax = -Infinity
  let totalSubArrayMax = -Infinity
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    localSubArrayMax = Math.max(num, localSubArrayMax + num)
    totalSubArrayMax = Math.max(totalSubArrayMax, localSubArrayMax)
  }
  return totalSubArrayMax
}
