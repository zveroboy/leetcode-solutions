import { range } from '../data/Matrix'

export function findDisappearedNumbers(nums: number[]): number[] {
  const result: number[] = [...range(1, nums.length)]

  nums.forEach((num) => {
    result[num - 1] -= num
  })

  return result.filter((num) => num > 0)
}
