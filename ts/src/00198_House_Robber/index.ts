export function robTab(nums: number[]): number {
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

export function rob(nums: number[]): number {
  const memo: number[] = [nums[0]]

  const compareParts = (i: number): [number, number] =>
    i === 1 ? [nums[0], nums[1]] : [helper(i - 1), helper(i - 2) + nums[i]]

  const helper = (i: number) => (memo[i] ??= Math.max(...compareParts(i)))

  return helper(nums.length - 1)
}
