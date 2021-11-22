export default function (arr: number[]): boolean {
  const acc = new Set<number>()
  for (const n of arr) {
    if (acc.has(n * 2)) {
      return true
    }
    if (n % 2 === 0) {
      if (acc.has(n / 2)) {
        return true
      }
    }

    acc.add(n)
  }

  return false
}
