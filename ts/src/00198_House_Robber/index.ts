export function rob(nums: number[]): number {
  const memo: number[] = []
  const helper = (i: number) => {
    if (i === 0) return (memo[i] = nums[i])
    if (i === 1) return Math.max(memo[i - 1], nums[i])
    return Math.max(memo[i - 1], memo[i - 2] + nums[i])
  }
  for (let i = 0; i < nums.length; i++) {
    memo[i] = helper(i)
  }

  return memo[memo.length - 1]
}
