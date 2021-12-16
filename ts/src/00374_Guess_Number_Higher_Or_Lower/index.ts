type GuessReturn = -1 | 0 | 1

export const pick = (pick: number): ((n: number) => number) => {
  const guess = (num: number): GuessReturn => {
    if (num === pick) {
      return 0
    }
    if (num > pick) {
      return -1
    }
    return 1
  }

  function guessNumber(n: number): number {
    if (n === 1) {
      return 1
    }
    if (guess(1) === 0) {
      return 1
    }
    if (guess(n) === 0) {
      return n
    }

    let from = 0
    let to = n

    while (1 + from < to) {
      const mid = from + Math.floor((to - from) / 2)
      const res = guess(mid)

      if (res === 0) {
        return mid
      }
      if (res < 0) {
        to = mid
      } else {
        from = mid
      }
    }

    throw new Error('Something went wrong')
  }

  return guessNumber
}
