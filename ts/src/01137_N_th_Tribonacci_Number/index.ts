export function tribonacci(n: number): number {
  const memo: number[] = [0, 1, 1]

  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 3] + memo[i - 2] + memo[i - 1]
  }

  return memo[n]
}
