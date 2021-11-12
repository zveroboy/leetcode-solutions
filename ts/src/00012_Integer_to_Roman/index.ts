const RomanNumbers = Object.freeze({
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
})

export default function (input: number): string {
  if (1 > input || input > 3999) {
    throw new Error('The number is out of bounds')
  }

  const entries = Object.entries(RomanNumbers).reverse()

  const [, result] = entries.reduce<[number, string]>(
    ([number, acc], [one, divider], i, romanNumberEntries) => {
      // Skip 5, 50, 500
      if (i % 2) {
        return [number, acc]
      }

      const digit = Math.floor((number - (number % divider)) / divider)
      number -= digit * divider

      if (digit < 4) {
        return [number, acc + one.repeat(digit)]
      }

      const five = romanNumberEntries[i - 1][0]
      const ten = romanNumberEntries[i - 2][0]
      let res = ''

      if (digit === 4) {
        res = one + five
      } else if (digit === 9) {
        res = one + ten
      } else {
        res = five + one.repeat(digit % 5)
      }

      return [number, acc + res]
    },
    [input, ''],
  )

  return result
}
