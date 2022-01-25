import { range } from '../data/Matrix'
import { sortArray as solution } from '.'
import { shuffle } from '../utils/sort'

describe(solution, () => {
  it('case 1', () => {
    expect(solution([5, 2, 3, 1])).toEqual([1, 2, 3, 5])
  })
  it('case dyn', () => {
    const arr = [...range(1, 10)]
    const copyArr = [...arr]
    shuffle(copyArr)
    expect(solution(copyArr)).toEqual(arr)
  })
})
