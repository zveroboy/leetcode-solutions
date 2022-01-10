export const insertionSort = (arr: number[]): number[] => {
  for (const s in arr) {
    let m = +s
    while (m > 0 && arr[m] < arr[m - 1]) {
      ;[arr[m - 1], arr[m]] = [arr[m], arr[m - 1]]
      m--
    }
  }
  return arr
}

export const bubbleSort = (arr: number[]): number[] => {
  const len = arr.length
  let isSorted = len < 2
  let s = 0
  while (!isSorted) {
    isSorted = true
    for (let m = 1; m < len - s; m++ ) {
      if (arr[m] < arr[m - 1]) {
        isSorted = false
        ;[arr[m - 1], arr[m]] = [arr[m], arr[m - 1]]
      }
    }
    s++
  }

  return arr
}

export const selectionSort = (arr: number[]): number[] => {
  const len = arr.length

  for (let s = 0; s < len; s++) {
    let min = -1
    for (let m = s; m < len; m++) {
      if (arr[m] < (arr[min] ?? Infinity)) {
        min = m
      }
    }
    ;[arr[s], arr[min]] = [arr[min], arr[s]]
  }

  return arr
}

export const shuffle = <T>(arr: T[]): void => {
  for (const i in arr) {
    const randIdx = Math.floor(Math.random() * (arr.length - +i)) + +i
    ;[arr[randIdx], arr[i]] = [arr[i], arr[randIdx]]
  }
}
