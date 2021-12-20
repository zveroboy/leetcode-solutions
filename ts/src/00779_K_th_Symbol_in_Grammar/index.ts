export function kthGrammar(n: number, k: number): number {
  const helper = (n: number, k: number): number => {
    if (n < 2) return k
    return k % 2 ^ helper(n - 1, k >> 1)
  }

  return helper(n, k - 1)
}
