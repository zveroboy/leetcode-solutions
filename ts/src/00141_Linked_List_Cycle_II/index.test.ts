import solution from '.'
import { createCycle } from '../data/ListNode'

it('should solve', () => {
  const ssl1 = createCycle([3, 2, 0, -4], 1)
  expect(solution(ssl1)).toEqual(ssl1?.next)

  const ssl2 = createCycle(
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    11,
  )
  // console.log(ssl2)
  // console.log(ssl2.next)
  expect(solution(ssl2)).toEqual(
    ssl2?.next?.next?.next?.next?.next?.next?.next?.next?.next?.next?.next,
  )
})
