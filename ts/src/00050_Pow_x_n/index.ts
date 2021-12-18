export function myPow(x: number, n: number): number {
  const helper = (x: number, n: number): number => {
    if (n === 0) return 1
    if (n === 1) return x
    const halfN = Math.floor(n / 2)
    const half = helper(x, halfN)
    return half * half * (n % 2 ? x : 1)
  }

  const acc = helper(x, Math.abs(n))

  if (n > 0) return acc
  if (n < 0) return 1 / acc
  return 1
}
