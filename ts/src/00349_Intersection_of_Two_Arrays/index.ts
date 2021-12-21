export function intersection(nums1: number[], nums2: number[]): number[] {
  const acc: Record<number, number> = {}
  for (const n of nums1) {
    acc[n] = 0
  }
  for (const n of nums2) {
    acc[n] != null && (acc[n] = 1)
  }
  return Object.entries<number>(acc)
    .filter(([, val]) => val === 1)
    .map(([n]) => +n)
}
