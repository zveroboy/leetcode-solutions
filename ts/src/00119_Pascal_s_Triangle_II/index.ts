const sum = function* (inp: number[]): Iterable<number> {
  for (let i = 1; i < inp.length; i++) yield inp[i - 1] + inp[i]
}

export default function getRow(rowIndex: number): number[] {
  if (rowIndex === 0) {
    return [1]
  } else {
    const res = getRow(rowIndex - 1)
    return [1, ...sum(res), 1]
  }
}
