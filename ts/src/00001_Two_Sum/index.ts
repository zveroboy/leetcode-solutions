export function twoSum(input: number[], target: number): [number, number] {
  const map: Record<number, string> = {}

  for (const i in input) {
    const pair = target - input[i]
    if (map[pair]) {
      return [+map[pair], +i]
    }
    map[input[i]] = i
  }

  throw new Error('out of task conditions')
}
