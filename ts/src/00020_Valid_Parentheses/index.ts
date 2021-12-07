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

const PARENTHESES = '()[]{}'

export default function isValid(s: string): boolean {
  const stack = new StackBase<string>()
  for (const ch of s) {
    const index = PARENTHESES.indexOf(ch)
    if (index % 2 === 0) {
      stack.push(ch)
    } else {
      const top = stack.top()
      if (!top) {
        return false
      }
      const topIndex = PARENTHESES.indexOf(top)
      if (index - topIndex !== 1) {
        return false
      }
      stack.pop()
    }
  }
  return [...stack].length === 0
}
