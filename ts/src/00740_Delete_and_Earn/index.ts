export function deleteAndEarn(nums: number[]): number {
  const points = new Map<number, number>()
  for (const i of nums) {
    const prev = points.get(+i) ?? 0
    points.set(+i, prev + 1)
  }
  const keys = [...points.keys()].sort((a, b) => a - b)

  const tab: number[] = []

  const helper = (num: number, i: number): number => {
    const cur = num * (points.get(num) ?? 0)
    if (i === 0) return cur

    if (points.has(num - 1)) {
      const skip = tab[i - 1]
      const prev = tab[i - 2] ?? 0
      return Math.max(skip, prev + cur)
    }

    return tab[i - 1] + cur
  }

  for (const k in keys) {
    tab[+k] = helper(keys[k], +k)
  }

  return tab.at(-1) ?? 0
}
