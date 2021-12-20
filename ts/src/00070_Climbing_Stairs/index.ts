export function climbStairs(n: number): number {
  const memo: number[] = []
  const helper = (n: number): number => {
    if (n < 2) {
      return n
    }

    memo[n - 1] ??= helper(n - 1)
    memo[n - 2] ??= helper(n - 2)

    return memo[n - 1] + memo[n - 2]
  }
  return helper(n + 1)
}
