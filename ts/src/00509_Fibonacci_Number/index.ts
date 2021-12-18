export function fib(n: number): number {
  const memo: number[] = []
  const helper = (n: number): number => {
    if (n < 2) {
      return n
    }

    const result = helper(n - 1) + helper(n - 2)
    memo[n] = result
    return result
  }
  return helper(n)
}
