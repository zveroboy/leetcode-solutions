import { decodeString as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect<string>(solution('3[a]2[bc]')).toEqual<string>('aaabcbc')
  })
  it('case 2', () => {
    expect<string>(solution('3[a2[c]]')).toEqual<string>('accaccacc')
  })
  it('case 3', () => {
    expect<string>(solution('2[abc]3[cd]ef')).toEqual<string>('abcabccdcdcdef')
  })
  it('case 4', () => {
    expect<string>(solution('abc3[cd]xyz')).toEqual<string>('abccdcdcdxyz')
  })
  it('case 5', () => {
    expect<string>(solution('10[leetcode]')).toEqual<string>(
      'leetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcode',
    )
  })
})
