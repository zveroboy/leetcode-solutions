export type Predicate<T> = (item: T) => boolean

export const binarySearch = function* <T>(
  array: T[],
  pred: Predicate<T>,
): Generator<number> {
  let from = -1,
    to = array.length
  while (1 + from < to) {
    const mid = from + ((to - from) >> 1)

    yield mid

    if (pred(array[mid])) {
      to = mid
    } else {
      from = mid
    }
  }
}
