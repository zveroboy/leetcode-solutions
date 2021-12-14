/**
Do not return anything, modify nums1 in-place instead.
*/
export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
): void {
  for (let i = 0, j = n; i < m + n && j > 0; i++) {
    const n1 = nums1[i]
    const n2 = nums2[n - j]
    if (n2 < n1) {
      nums1.splice(i, 0, n2)
      j--
      nums1.pop()
    } else if (i >= m + n - j) {
      nums1.splice(i, 1, n2)
      j--
    }
  }
}
