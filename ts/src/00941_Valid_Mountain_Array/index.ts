export default function (arr: number[]): boolean {
  const len = arr.length
  if (len < 3) {
    return false
  }

  let acc = 0
  for (let l = 1; l < len; l++) {
    const next = arr[l]
    const prev = arr[l - 1]
    const diff = next - prev

    if ((acc === 0 && diff < 0) || diff === 0 || (acc < 0 && diff > 0)) {
      return false
    }

    acc = diff
  }

  return acc < 0
}
