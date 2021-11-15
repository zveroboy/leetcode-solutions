import { create } from './ListNode'

it('should create', () => {
  const ssl1 = create([3, 2, 0, -4], 1)
  expect(ssl1.next?.next?.next?.next).toBe(ssl1.next)

  const ssl2 = create([1, 2], 0)
  expect(ssl2.next?.next).toBe(ssl2)

  const ssl3 = create([1], -1)
  expect(ssl3.next).toBe(null)

  const ssl4 = create(
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    1,
  )
  expect(
    ssl4?.next?.next?.next?.next?.next?.next?.next?.next?.next?.next?.next?.next
      ?.next?.next?.next?.next?.next?.next?.next?.next,
  ).toBe(ssl4.next)
})
