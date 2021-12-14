import { merge as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    const nums1 = [1, 2, 3, 0, 0, 0]
    solution(nums1, 3, [2, 5, 6], 3)
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6])
  })
  it('case 2', () => {
    const nums1 = [1]
    solution(nums1, 1, [], 0)
    expect(nums1).toEqual([1])
  })
  it('case 3', () => {
    const nums1 = [0]
    solution(nums1, 0, [1], 1)
    expect(nums1).toEqual([1])
  })
})
