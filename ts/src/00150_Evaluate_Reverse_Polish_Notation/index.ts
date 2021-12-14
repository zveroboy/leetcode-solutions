import { StackBase } from '../data/StackBase'

const OPERATOR_FUNC: Record<string, (a: number, b: number) => number> =
  Object.freeze({
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => {
      if (b === 0) {
        throw new Error('Division by zero')
      }
      const result = a / b
      return Math.sign(result) * Math.floor(Math.abs(result))
    },
  })

export function evalRPN(tokens: string[]): number {
  const stack = new StackBase<number>()
  const operators = Object.keys(OPERATOR_FUNC)
  for (const ch of tokens) {
    if (operators.includes(ch)) {
      const operand2 = stack.top()
      stack.pop()
      const operand1 = stack.top()
      stack.pop()

      if (operand1 == null || operand2 == null) {
        throw new Error('Wrong token structure')
      }

      const operation = OPERATOR_FUNC[ch]
      console.log(operand1, ch, operand2)
      stack.push(operation(operand1, operand2))
      continue
    }
    stack.push(+ch)
  }
  const result = stack.top()
  if (result == null) {
    throw new Error('Wrong token structure')
  }
  return result
}
