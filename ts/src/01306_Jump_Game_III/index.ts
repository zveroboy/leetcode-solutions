export default function canReach(arr: number[], start: number): boolean {
  const visited = new Set<number>()
  const helper = (idx: number): boolean => {
    if (idx < 0 || idx >= arr.length) {
      return false
    }
    if (visited.has(idx)) {
      return false
    }
    const val = arr[idx]
    if (val === 0) {
      return true
    }
    visited.add(idx)
    return helper(idx + val) || helper(idx - val)
  }
  return helper(start)
}
