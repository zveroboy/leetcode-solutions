export function minCostClimbingStairs(cost: number[]): number {
  const memo: number[] = []
  const helper = (i: number) => {
    if (i === cost.length - 1)
      return Math.min(memo[i - 1], (memo[i - 2] ?? 0) + cost[i])
    if (i < 2) return (memo[i] = cost[i])
    return Math.min(memo[i - 1], memo[i - 2]) + cost[i]
  }
  for (let i = 0; i < cost.length; i++) {
    memo[i] = helper(i)
  }

  return memo[memo.length - 1]
}
