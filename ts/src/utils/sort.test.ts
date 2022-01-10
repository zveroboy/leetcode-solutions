import { range } from '../data/Matrix'
import { shuffle, insertionSort, bubbleSort, selectionSort } from './sort'

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

describe(bubbleSort, () => {
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
