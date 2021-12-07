import { StackBase } from '../data/StackBase'

// this simple version has O(n) complexity on getMin
// export class MinStack extends StackBase<number> {
//   top(): number {
//     return this.head?.val ?? -1
//   }
//   getMin(): number {
//     return [...this].reduce<number>(
//       (acc, { val }) => Math.min(acc, val),
//       Infinity,
//     )
//   }
// }

export class MinStack extends StackBase<number> {
  min = Infinity

  getDelta(val: number): number {
    return 2 * val - this.min
  }

  prevMin(delta: number): number {
    return 2 * this.min - delta
  }

  push(val: number): void {
    let newVal = val
    if (val < this.min) {
      newVal = this.isEmpty() ? val : this.getDelta(val)
      this.min = val
    }
    super.push(newVal)
  }

  pop(): void {
    const top = this.head?.val
    super.pop()
    if (top == null || this.isEmpty()) {
      this.min = Infinity
      return
    }
    if (top < this.min) {
      this.min = this.prevMin(top)
    }
  }

  top(): number {
    const topVal = this.head?.val

    if (topVal == null) {
      return Infinity
    }

    return topVal < this.min ? this.min : topVal
  }

  getMin(): number {
    return this.min
  }
}
