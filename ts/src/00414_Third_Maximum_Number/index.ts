const LIMIT = 3
export function thirdMax(nums: number[]): number {
  const max: (number | null)[] = Array(LIMIT).fill(null)
  const addMax = (num: number) => {
    let k = -1
    while (++k < LIMIT) {
      const maxNum = max[k] ?? -Infinity
      if (maxNum === num) {
        break
      }
      if (maxNum < num) {
        max.splice(k, 0, num)
        break
      }
    }
  }

  nums.forEach(addMax)

  const result = max[2] ?? max[0]

  if (result == null) {
    throw new Error('something went')
  }

  return result
}
