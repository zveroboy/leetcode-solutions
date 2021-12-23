export function heightChecker(heights: number[]): number {
  const sorted = [...heights].sort((a, b) => a - b)

  return sorted.reduce((acc, val1, i) => {
    return acc + +(val1 !== heights[i])
  }, 0)
}
