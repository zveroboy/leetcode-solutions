import { findPeakElement as solution } from '.'

describe(solution, () => {
  it('case 1', () => {
    expect([2]).toContain(solution([1, 2, 3, 1]))
  })
  it('case 1a', () => {
    expect([1]).toContain(solution([1, 3, 2, 1]))
  })
  it('case 2', () => {
    expect([1, 5]).toContain(solution([1, 2, 1, 3, 5, 6, 4]))
  })
  it('case 3', () => {
    expect([3, 4]).toContain(solution([0, 3, 1, 5, 1, 2, 0]))
  })
  it('case 4', () => {
    expect([0]).toContain(solution([1]))
  })
  it('case 5', () => {
    expect([1]).toContain(solution([1, 2]))
  })
  it('case 6', () => {
    expect([0]).toContain(solution([2, 1]))
  })
  it('case 7', () => {
    expect([0]).toContain(solution([3, 2, 1]))
  })
  it('case 8', () => {
    expect([2]).toContain(solution([1, 2, 3]))
  })
})
