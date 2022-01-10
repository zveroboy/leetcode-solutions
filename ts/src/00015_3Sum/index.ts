const target = 0

export function threeSum(nums: number[]): number[][] {
  const result: number[][] = []
  const len = nums.length
  if (len < 3) return result

  const combs = new Set<string>()

  const sorted = [...nums]
  const sortFn = (a: number, b: number): number => Math.sign(a - b)
  sorted.sort(sortFn)

  const addComb = (comb: number[]) => {
    const fp = comb.toString()
    if (!combs.has(fp)) {
      result.push(comb)
      combs.add(fp)
    }
  }

  for (const cs in sorted) {
    const c = +cs
    let l = c + 1
    let r = len - 1
    while (sorted[c] <= 0 && l < r) {
      if (sorted[c] === 0 && sorted[r] === 0) {
        addComb([0, 0, 0])
        break
      }

      const comb = [c, l, r].map((i) => sorted[i])
      const sum = comb.reduce((a, b) => a + b)

      if (sum === target) {
        addComb(comb)
      }

      if (sum >= target) {
        r--
      }
      if (sum <= target) {
        l++
      }
    }
  }

  return result
}
