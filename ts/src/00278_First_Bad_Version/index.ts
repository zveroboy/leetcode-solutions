import { binarySearch } from '../data/BinarySearch'

export const MAX = 2 ** 31 - 1

const solution = function (isBadVersion: any) {
  const memo: Record<number, boolean> = {}
  const memoizedIsBadVersion = (num: number) => {
    if (!memo[num]) {
      memo[num] = isBadVersion(num)
    }
    return memo[num]
  }
  return function (n: number): number {
    let i = 0
    for (const mid of binarySearch(n, (_, mid) => memoizedIsBadVersion(mid))) {
      i++
      if (memoizedIsBadVersion(mid) && !memoizedIsBadVersion(mid - 1)) {
        console.log({ i })
        return mid
      }
    }
    throw new Error('Somethign went wrong')
  }
}

export { solution }
