const gt = (a: number, b: number) => a > b
const lt = (a: number, b: number) => a < b
const heapInsert =
  <T>(predicate: (a: T, b: T) => boolean) =>
  (heap: T[], k: T): void => {
    heap.push(k)
    let curIndex = heap.length - 1
    while (curIndex) {
      const parentIndex = Math.floor((curIndex - 1) / 2)
      if (!predicate(heap[curIndex], heap[parentIndex])) {
        break
      }

      ;[heap[curIndex], heap[parentIndex]] = [heap[parentIndex], heap[curIndex]]
      curIndex = parentIndex
    }
  }
export const minHeapInsert = heapInsert(lt)

const heapDelete =
  <T>(predicate: (a: T, b: T) => boolean) =>
  (heap: T[]): void => {
    heap.shift()
    if (heap.length > 1) {
      const val = heap.pop()
      val != null && heap.unshift(val)
    }

    let curIndex = 0
    while (curIndex < heap.length - 1) {
      const left = curIndex * 2 + 1
      const right = curIndex * 2 + 2

      if (heap[left] == null && heap[right] == null) {
        break
      }

      let compareIndex = left

      if (heap[right] != null && predicate(heap[right], heap[left])) {
        compareIndex = right
      }

      if (predicate(heap[curIndex], heap[compareIndex])) {
        break
      }

      ;[heap[curIndex], heap[compareIndex]] = [
        heap[compareIndex],
        heap[curIndex],
      ]

      curIndex = compareIndex
    }
  }

export const minHeapDelete = heapDelete(lt)

export function findKthLargest(nums: number[], k: number): number {
  const minHeap: number[] = []

  for (const num of nums) {
    const heapTop = minHeap[0] ?? -Infinity
    if (minHeap.length < k || heapTop < num) {
      minHeapInsert(minHeap, num)
    }
    if (minHeap.length > k) {
      minHeapDelete(minHeap)
    }
  }

  return minHeap[0]
}
