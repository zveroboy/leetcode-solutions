const sum = function* (inp: number[]): Generator<number> {
  for (let i = 1; i < inp.length; i++) yield inp[i - 1] + inp[i]
}

// generator solution
const generatorHelper = function* (numRows: number): Generator<number[]> {
  let prev = [1]
  while (numRows--) {
    yield prev
    prev = [1, ...sum(prev), 1]
  }
}

// recursion solution
const recursionHelper = (numRows: number, acc: number[][]): number[][] => {
  if (numRows < 1) {
    return acc
  }

  const prev = acc[acc.length - 1]
  const row = prev ? [1, ...sum(prev), 1] : [1]

  acc.push(row)

  return recursionHelper(numRows - 1, acc)
}

export function generate(numRows: number): number[][] {
  // return recursionHelper(numRows, [])
  return [...generatorHelper(numRows)]
}
