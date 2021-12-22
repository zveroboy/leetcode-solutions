import { addTwoNumbers as solution } from '.'
import { fromArray, toArray } from '../data/ListNode'

const cases = () => {
  const testCase =
    (list1: number[], list2: number[]) => (exp: number[]) => () => {
      const sll1 = fromArray(list1)
      const sll2 = fromArray(list2)
      const sol = solution(sll1, sll2)
      expect(toArray(sol)).toEqual(exp)
    }

  return () => {
    it('case 1', testCase([2, 4, 3], [5, 6, 4])([7, 0, 8]))
    it('case 2', testCase([0], [0])([0]))
    it(
      'case 3',
      testCase([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])([8, 9, 9, 9, 0, 0, 0, 1]),
    )
    it(
      'case 4',
      testCase(
        [
          1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 1,
        ],
        [5, 6, 4],
      )([
        6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 1,
      ]),
    )
  }
}

describe(solution, cases())
