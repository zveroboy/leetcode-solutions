const L_BR = '['
const R_BR = ']'

const createStack = () => {
  const stack: string[] = []
  return {
    push(val: string): void {
      stack.push(val)
    },
    pop(): string | undefined {
      return stack.pop()
    },
    head(): string | undefined {
      return stack[stack.length - 1]
    },
    length(): number {
      return stack.length
    },
    getNextGroup(): string {
      let acc = ''
      while (stack.length) {
        const ch2 = stack.pop()
        // We've reached the end of group. The next item is number
        if (ch2 == L_BR) {
          break
        }

        acc = ch2 + acc
      }
      return acc
    },
    getRepeatTimes(): number {
      let repeatTimes = ''
      while (stack.length) {
        const head = this.head()
        if (!head || isNaN(+head)) {
          break
        }
        repeatTimes = stack.pop() + repeatTimes
      }
      return +repeatTimes
    },
  }
}

export function decodeString(s: string): string {
  const stack = createStack()
  let result = ''
  for (const ch of s) {
    if (!isNaN(+ch)) {
      stack.push(ch)
      continue
    }

    if (ch === L_BR) {
      stack.push(L_BR)
      continue
    }

    if (ch === R_BR) {
      const acc = stack.getNextGroup().repeat(stack.getRepeatTimes())

      if (stack.length()) {
        stack.push(acc)
      } else {
        result += acc
      }

      continue
    }

    if (stack.length()) {
      stack.push(ch)
      continue
    }

    result += ch
  }

  return result
}
