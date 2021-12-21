let i = 0
const splitByDigits = (n: number): number[] => {
  const result = []
  let log = Math.floor(Math.log10(n))
  while (log >= 0) {
    const d = Math.floor(n / 10 ** log)
    result.push(d)
    n -= d * 10 ** log
    log--
  }
  return result
}
export function isHappy(n: number): boolean {
  const memo = new Set<number>()
  let cur = n

  while (true) {
    cur = splitByDigits(cur).reduce<number>((acc, n) => acc + n ** 2, 0)

    if (cur - 10 ** Math.floor(Math.log10(cur)) === 0) {
      return true
    }
    if (memo.has(cur)) {
      return false
    }
    memo.add(cur)
  }
}
