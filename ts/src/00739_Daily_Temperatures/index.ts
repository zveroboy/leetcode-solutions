export function dailyTemperatures(temperatures: number[]): number[] {
  const stack: (readonly [index: string, value: number])[] = []
  const result: number[] = [...temperatures].fill(0)
  for (const i in temperatures) {
    const temp1 = temperatures[i]
    do {
      const top = stack[stack.length - 1]
      if (!top) {
        break
      }
      const [j, temp2] = top
      if (temp1 <= temp2) {
        break
      }
      result[+j] = +i - +j
    } while (stack.pop())
    stack.push([i, temp1])
  }
  return result
}
