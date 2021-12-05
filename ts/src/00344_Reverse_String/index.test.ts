import solution from '.'

describe('should solve', () => {
  it('case 1', () => {
    const sa = ['h', 'e', 'l', 'l', 'o']
    solution(sa)
    expect(sa).toEqual(['o', 'l', 'l', 'e', 'h'])
  })

  it('case 2', () => {
    const sa = ['H', 'a', 'n', 'n', 'a', 'h']
    solution(sa)
    expect(sa).toEqual(['h', 'a', 'n', 'n', 'a', 'H'])
  })
})
