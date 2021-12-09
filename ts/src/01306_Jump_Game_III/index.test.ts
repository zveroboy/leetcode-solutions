import solution from '.'

it('should solve', () => {
  expect(solution([4, 2, 3, 0, 3, 1, 2], 5)).toBe(true)
  expect(solution([4, 2, 3, 0, 3, 1, 2], 0)).toBe(true)
  expect(solution([3, 0, 2, 1, 2], 2)).toBe(false)
})
