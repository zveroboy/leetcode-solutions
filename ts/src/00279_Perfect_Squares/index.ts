export function numSquares(n: number): number {
  const memo: Record<number, number> = {}

  const helper = (n: number): number => {
    if (n < 4) {
      return n
    }

    if (memo[n]) {
      return memo[n]
    }

    let min = Infinity
    let top = 0
    let square = 0
    let next = 0

    top = Math.sqrt(n)
    do {
      square = Math.floor(top) ** 2
      const count = Math.floor(n / square)
      next = n % square
      min = Math.min(min, helper(next) + count)
      top--
    } while (top > 1)

    memo[n] = min
    return min
  }

  return helper(n)
}
