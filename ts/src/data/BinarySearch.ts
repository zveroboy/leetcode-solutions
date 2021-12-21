export type Predicate = (from: number, mid: number, to: number) => boolean

export const binarySearch = function* (
  max: number,
  pred: Predicate,
): Generator<number> {
  if (max < 1) return
  let from = 0,
    to = max
  while (from <= to) {
    const mid = from + Math.floor((to - from) / 2)

    yield mid

    if (pred(from, mid, to)) {
      to = mid - 1
    } else {
      from = mid + 1
    }
  }
}
