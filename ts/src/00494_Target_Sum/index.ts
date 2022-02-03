import { assertIsFinite } from '../utils/assertations'

export function findTargetSumWays(nums: number[], target: number): number {
  const len = nums.length
  const dp: Map<number, number>[] = new Array(len).fill(0).map(() => new Map())

  for (let i = 0; i < len; i++) {
    const prev = dp[i - 1] ?? new Map([[0, 1]])
    for (const [prevSum, cnt] of prev.entries()) {
      assertIsFinite()

      const num = nums[i]

      const sum = prevSum + num
      const pos = dp[i].get(sum) ?? 0
      dp[i].set(sum, pos + cnt)

      const substract = prevSum - num
      const neg = dp[i].get(substract) ?? 0
      dp[i].set(substract, neg + cnt)
    }
  }

  return dp[len - 1].get(target) ?? 0
}
