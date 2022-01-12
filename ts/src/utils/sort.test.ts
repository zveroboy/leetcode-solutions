import { range } from '../data/Matrix'
import {
  shuffle,
  insertionSort,
  bubbleSort,
  selectionSort,
  merge,
  mergeSort,
  quickSort,
} from './sort'

describe.skip(insertionSort, () => {
  test('case 1', () => {
    const arr = [1, 2, 4, 5, 6, 9, 10, 8, 7, 3]
    expect(insertionSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
  test('case rand', () => {
    const arr = [...range(1, 10)]
    const copyArr = [...arr]
    shuffle(copyArr)
    expect(insertionSort(copyArr)).toEqual(arr)
  })
})

describe.skip(bubbleSort, () => {
  test('case 1', () => {
    const arr = [1, 2, 4, 5, 6, 9, 10, 8, 7, 3]
    expect(bubbleSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
  test('case rand', () => {
    const arr = [...range(1, 10)]
    const copyArr = [...arr]
    shuffle(copyArr)
    expect(bubbleSort(copyArr)).toEqual(arr)
  })
})

describe.skip(selectionSort, () => {
  test('case 1', () => {
    const arr = [1, 2, 4, 5, 6, 9, 10, 8, 7, 3]
    expect(selectionSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
  test('case rand', () => {
    const arr = [...range(1, 10)]
    const copyArr = [...arr]
    shuffle(copyArr)
    expect(selectionSort(copyArr)).toEqual(arr)
  })
})

describe.skip(mergeSort, () => {
  test('case 1', () => {
    const arr = [1, 2, 4, 5, 6, 9, 10, 8, 7, 3]
    expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
  test('case rand', () => {
    const arr = [...range(1, 10)]
    const copyArr = [...arr]
    shuffle(copyArr)
    expect(mergeSort(copyArr)).toEqual(arr)
  })
})

describe.skip(quickSort, () => {
  test('case 1', () => {
    const arr = [4, 2, 1, 5, 6, 9, 10, 8, 7, 3]
    expect(quickSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
  test('case rand', () => {
    const arr = [...range(1, 10)]
    const copyArr = [...arr]
    shuffle(copyArr)
    expect(quickSort(copyArr)).toEqual(arr)
  })
})

describe(merge, () => {
  test('case 1', () => {
    expect(merge([1, 2, 4, 5, 6], [2, 3, 7, 8, 9, 10, 11, 12, 13])).toEqual([
      1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    ])
  })
})
