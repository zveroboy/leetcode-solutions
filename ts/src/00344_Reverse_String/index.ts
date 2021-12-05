/**
 Do not return anything, modify s in-place instead.
 */
export default function (s: string[]): void {
  const helper = (idx: number): void => {
    const mirrorredIdx = s.length - 1 - idx
    if (idx >= mirrorredIdx) {
      return
    }
    const mirrorred = s.splice(mirrorredIdx, 1, s[idx])
    s.splice(idx, 1, ...mirrorred)
    return helper(++idx)
  }
  helper(0)
}
