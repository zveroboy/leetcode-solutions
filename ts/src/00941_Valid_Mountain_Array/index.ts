export default function (arr: number[]): boolean {
  const len = arr.length
  if (len < 3) {
    return false
  }

  let left = -Infinity
  for (let l = 0; l < len - 1; l++) {
    const diff = arr[l + 1] - arr[l]

    if (diff < 1) {
      left = l
      break
    }
  }

  let right = Infinity
  for (let r = len - 1; r > 0; r--) {
    const diff = arr[r - 1] - arr[r]

    if (diff < 1) {
      right = r
      break
    }
  }

  return left === right
}
