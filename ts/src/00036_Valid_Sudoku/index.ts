import { Coord, range } from '../data/Matrix'

interface SudokuSubArray {
  (i: number): Generator<Coord, void, void>
}

const SUDOKU = Object.freeze({
  SIZE: 9,
  SUB_SIZE: 3,
})

const cell: SudokuSubArray = function* (i) {
  for (const c of range(0, SUDOKU.SIZE - 1)) {
    yield [i, c]
  }
}

const row: SudokuSubArray = function* (i) {
  for (const r of range(0, SUDOKU.SIZE - 1)) {
    yield [r, i]
  }
}

const sub: SudokuSubArray = function* (i) {
  const rowFactor = Math.floor(i / SUDOKU.SUB_SIZE)
  const rowParams = [
    rowFactor * SUDOKU.SUB_SIZE,
    (rowFactor + 1) * SUDOKU.SUB_SIZE - 1,
  ] as const

  const cellFactor = i % SUDOKU.SUB_SIZE
  const cellParams = [
    cellFactor * SUDOKU.SUB_SIZE,
    (cellFactor + 1) * SUDOKU.SUB_SIZE - 1,
  ] as const

  for (const r of range(...rowParams)) {
    for (const c of range(...cellParams)) {
      yield [r, c]
    }
  }
}

const validateDigits = (input: number[]) => {
  const digits = [...range(1, 9)]

  for (const num of input) {
    if (num === 0) {
      continue
    }
    digits[num - 1] -= num
  }

  return digits.every((d) => d >= 0)
}

export function isValidSudoku(board: string[][]): boolean {
  for (const i of range(0, SUDOKU.SIZE - 1)) {
    for (const gen of [cell, row, sub]) {
      const subArray: number[] = []
      for (const [r, c] of gen(i)) {
        const val = +board[r][c] || 0
        subArray.push(val)
      }
      if (!validateDigits(subArray)) {
        return false
      }
    }
  }
  return true
}
