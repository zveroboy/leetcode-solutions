export default function (input: number[], target: number): [number, number] {
  const map: Record<number, string> = {}

  // for (let i = 0; i < input.length; i++) {
  for (let i in input) {
    const pair = target - input[i]
    if (map[pair]) {
      return [+map[pair], +i]
    }
    map[input[i]] = i
  }

  throw new Error('out of task conditions')
}
