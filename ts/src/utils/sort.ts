type Sort = (arr: number[]) => number[]

const swap = <T>(arr: T[], i: number, j: number): void => {
  if (i !== j) {
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
}

export const insertionSort: Sort = (arr) => {
  for (const i in arr) {
    for (let j = +i; j > 0 && arr[j] < arr[j - 1]; j--) {
      swap(arr, j, j - 1)
    }
  }

  return arr
}

export const bubbleSort: Sort = (arr) => {
  for (let s = arr.length; s > 0; s--) {
    let isSorted = true
    for (let m = 1; m < s; m++) {
      if (arr[m] < arr[m - 1]) {
        isSorted = false
        swap(arr, m, m - 1)
      }
    }
    if (isSorted) break
  }

  return arr
}

export const selectionSort: Sort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    if (i != min) swap(arr, i, min)
  }
  return arr
}

export const shuffle = <T>(arr: T[]): void => {
  for (const i in arr) {
    const randIdx = Math.floor(Math.random() * (arr.length - +i)) + +i
    ;[arr[randIdx], arr[i]] = [arr[i], arr[randIdx]]
  }
}

export const mergeLoop = (arr1: number[], arr2: number[]): number[] => {
  const helper = function* (): Generator<number, void, undefined> {
    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        yield arr1[i++]
      } else {
        yield arr2[j++]
      }
    }

    yield* arr1.slice(i)
    yield* arr2.slice(j)
  }

  return [...helper()]
}

export const merge = (arr1: number[], arr2: number[]): number[] => {
  const helper = function* (
    it1: IterableIterator<number>,
    it2: IterableIterator<number>,
  ): Generator<number, void, undefined> {
    for (let res1 = it1.next(), res2 = it2.next(); !res1.done || !res2.done; ) {
      if (res1.value <= res2.value || res2.done) {
        yield res1.value
        res1 = it1.next()
      }
      if (res2.value <= res1.value || res1.done) {
        yield res2.value
        res2 = it2.next()
      }
    }
  }

  return [...helper(arr1.values(), arr2.values())]
}

export const mergeSort: Sort = (arr) => {
  if (arr.length < 2) return arr
  const mid = arr.length >> 1 //Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

export const quickSort: Sort = (arr) => {
  const len = arr.length
  const helper = (start: number, end: number) => {
    if (start >= end) return

    let pivot = start
    for (let i = start + 1; i < end; i++) {
      if (arr[i] < arr[start]) {
        pivot++
        swap(arr, i, pivot)
      }
    }

    swap(arr, start, pivot)

    helper(start, pivot)
    helper(pivot + 1, end)
  }

  helper(0, len)

  return arr
}

// [3, 2, 4, 1]
