export function singleNumberset(nums: number[]): number {
  const acc: Record<number, number> = {}
  for (const n of nums) {
    acc[n] ??= 0
    acc[n]++
  }
  const entry = Object.entries<number>(acc).find(([, val]) => val === 1)
  return Number(entry?.[0])
}

export function singleNumber(nums: number[]): number {
  let result = 0
  for (const n of nums) {
    result ^= n
  }
  return result
}
