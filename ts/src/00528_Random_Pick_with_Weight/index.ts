import { assertIsFinite } from '../utils/assertations'

export class Solution {
  private nums: number[]
  private sum: number
  constructor(w: number[]) {
    this.nums = w
    this.sum = w.reduce((a, b) => a + b)
  }

  pickIndex(): number {
    while (true) {
      const rand = Math.random()
      const idx = Math.floor(rand * this.nums.length)
      if (Math.random() < this.nums[idx] / this.sum) {
        return idx
      }
    }
  }
}
