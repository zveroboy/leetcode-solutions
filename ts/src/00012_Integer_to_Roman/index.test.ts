import solution from '.'

it('should solve', () => {
  expect(solution(3)).toEqual('III')
  expect(solution(4)).toEqual('IV')
  expect(solution(9)).toEqual('IX')
  expect(solution(58)).toEqual('LVIII')
  expect(solution(1994)).toEqual('MCMXCIV')
})
