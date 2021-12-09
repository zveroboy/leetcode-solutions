import { containsDuplicate } from '.'

describe(containsDuplicate, () => {
  it('case 1', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true)
  })
  it('case 2', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false)
  })
  it('case 3', () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true)
  })
})
