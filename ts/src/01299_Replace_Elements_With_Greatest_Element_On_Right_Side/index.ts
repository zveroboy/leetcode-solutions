export default function (arr: number[]): number[] {
  const len = arr.length
  let max = -1
  for (let r = len - 1; r >= 0; r--) {
    const n = arr[r]
    arr.splice(r, 1, max)
    max = Math.max(max, n)
  }
  return arr
}
