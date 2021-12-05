import { defaultSolution, recursionSolution, ReverseLinkedList } from '.'
import { fromArray, toArray } from '../data/ListNode'

const cases = (solutionFn: ReverseLinkedList) => {
  const testCase = (inp: number[], exp: number[]) => () => {
    const ssl = fromArray(inp)
    const sol = solutionFn(ssl)
    expect(toArray(sol)).toEqual(exp)
  }

  return () => {
    it('case 1', testCase([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]))
    it('case 2', testCase([1, 2], [2, 1]))
    it('case 3', testCase([], []))
  }
}

describe(defaultSolution, cases(defaultSolution))
describe(recursionSolution, cases(recursionSolution))
