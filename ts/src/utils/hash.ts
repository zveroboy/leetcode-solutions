export const hash =
  (prime: number, len: number) =>
  (n: number): number => {
    let total = 0
    while (n > 0) {
      const d = n % 10
      total = (total * prime + d) % len
      n -= d
      n /= 10
    }
    return total
  }
