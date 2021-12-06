import solution from '.'

it('should solve', () => {
  expect(solution([1, 0, 1, 1, 0])).toEqual(4)
  expect(solution([1, 0, 1, 1, 0, 1])).toEqual(4)
  expect(solution([1])).toEqual(1)
})
