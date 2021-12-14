import { evalRPN as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect<number>(solution(['2', '1', '+', '3', '*'])).toEqual<number>(9)
  })
  it('case 2', () => {
    expect<number>(solution(['4', '13', '5', '/', '+'])).toEqual<number>(6)
  })
  it('case 3', () => {
    expect<number>(
      solution([
        '10',
        '6',
        '9',
        '3',
        '+',
        '-11',
        '*',
        '/',
        '*',
        '17',
        '+',
        '5',
        '+',
      ]),
    ).toEqual<number>(22)
  })
  it('case 4', () => {
    expect<number>(
      solution(['4', '-2', '/', '2', '-3', '-', '-']),
    ).toEqual<number>(-7)
  })
})
