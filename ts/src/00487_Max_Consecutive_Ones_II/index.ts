// Leetcode condition: What if the input numbers come in one by one as an infinite stream?
// In other words, you can't store all numbers coming from the stream as it's too large to hold in memory. /// Could you solve it efficiently?
// By using infitine generator we support the infinite stream
function* channel(): Iterator<number, void, number> {
  let prev = -1
  let cur = 0
  let max = 0
  while (true) {
    const signal = yield max
    if (signal === 0) {
      prev = cur
      cur = 0
    }
    cur += signal
    max = Math.max(max, prev + cur + 1)
  }
}

export default function findMaxConsecutiveOnes(nums: number[]): number {
  const ch = channel()
  ch.next()
  return nums.reduce<number>((acc, num) => {
    const res = ch.next(num)
    if (res.done) {
      return acc
    }
    return res.value
  }, 0)
}
