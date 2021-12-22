import { rotateRight as solution } from '.'
import { fromArray, toArray } from '../data/ListNode'

const cases = () => {
  const testCase = (list1: number[], k: number) => (exp: number[]) => () => {
    const sll1 = fromArray(list1)
    const sol = solution(sll1, k)
    expect(toArray(sol)).toEqual(exp)
  }

  return () => {
    it('case 1', testCase([1, 2, 3, 4, 5], 2)([4, 5, 1, 2, 3]))
    it('case 1a', testCase([1, 2, 3, 4, 5], 1)([5, 1, 2, 3, 4]))
    it('case 1b', testCase([1, 2, 3, 4, 5], 5)([1, 2, 3, 4, 5]))
    it('case 1c', testCase([1, 2, 3, 4, 5], 6)([5, 1, 2, 3, 4]))
    it('case 2', testCase([0, 1, 2], 4)([2, 0, 1]))
    it('case 3a', testCase([0, 1], 1)([1, 0]))
    it('case 3b', testCase([0, 1], 2)([0, 1]))
  }
}

describe(solution, cases())
