import { assertIsFinite } from '../utils/assertations'

const merge = function* (a: number[], b: number[]): Generator<number> {
  const aIt = a.values()
  const bIt = b.values()

  for (let aRes = aIt.next(), bRes = bIt.next(); !aRes.done || !bRes.done; ) {
    if (bRes.done || aRes.value <= bRes.value) {
      yield aRes.value
      aRes = aIt.next()
      continue
    } else if (aRes.done || aRes.value > bRes.value) {
      yield bRes.value
      bRes = bIt.next()
      continue
    }
    throw new Error('Something went wrong')
  }
}

export function sortArrayRec(nums: number[]): number[] {
  const len = nums.length
  if (len < 2) {
    return nums
  }

  const mid = len >> 1
  const a = sortArray(nums.slice(0, mid))
  const b = sortArray(nums.slice(mid))
  return [...merge(a, b)]
}

export function sortArray(nums: number[]): number[] {
  const queue: number[][] = nums.map((a) => [a])
  while (queue.length > 1) {
    assertIsFinite()
    const a = queue.shift()
    const b = queue.shift()
    if (!a || !b) throw new Error('Something went wrong')

    queue.push([...merge(a, b)])
  }

  return queue.shift() ?? []
}
