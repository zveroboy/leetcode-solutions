import { Coord, getSize, add, range } from '../data/Matrix'
import { Move } from '../data/Coords'

const cycledIterable = function* <T>(
  iter: Iterable<T>,
): Generator<T, void, undefined> {
  while (true) {
    yield* iter
  }
}

type Bounds = {
  readonly TL: Coord
  readonly BR: Coord
}

class Box {
  constructor(private readonly bounds: Bounds) {}

  isValid() {
    return (
      this.bounds.TL[0] <= this.bounds.BR[0] &&
      this.bounds.TL[1] <= this.bounds.BR[1]
    )
  }

  withinBounds([r, c]: Coord) {
    return (
      r >= this.bounds.TL[0] &&
      r <= this.bounds.BR[0] &&
      c >= this.bounds.TL[1] &&
      c <= this.bounds.BR[1]
    )
  }

  shrink([mr, mc]: Coord): Box {
    const key: keyof Bounds = mr + mc > 0 ? 'TL' : 'BR'
    const newBounds = {
      ...this.bounds,
      [key]: add(this.bounds[key], [mr, mc]),
    }
    return new Box(newBounds)
  }
}

let lim = 0

export function spiralOrderDir(matrix: number[][]): number[] {
  const cycledMoves = cycledIterable<Coord>([
    Move.RIGHT,
    Move.DOWN,
    Move.LEFT,
    Move.UP,
  ])[Symbol.iterator]()

  const [h, w] = getSize(matrix)

  const getNextMove = (): Coord => {
    const newMoveResult = cycledMoves.next()
    if (newMoveResult.done) throw new Error('sww')
    return newMoveResult.value
  }

  const gen = function* (box: Box, dir: Coord, start: Coord): Generator<Coord> {
    if (!box.isValid()) {
      return
    }

    let coord = start
    for (
      let next = add(start, dir);
      box.withinBounds(next);
      next = add(next, dir)
    ) {
      if (++lim > 100) throw new Error('toooo')
      yield next
      coord = next
    }

    const newMove = getNextMove()
    yield* gen(box.shrink(newMove), newMove, coord)
  }

  const move = getNextMove()
  const result: number[] = []
  for (const [r, c] of gen(
    new Box({ TL: [0, 0], BR: [h - 1, w - 1] }),
    move,
    add([0, 0], Move.LEFT),
  )) {
    result.push(matrix[r][c])
  }
  return result
}

export function spiralOrder(matrix: number[][]): number[] {
  const spiralCoords = function* (h: number, w: number): Generator<Coord> {
    for (const c of range(0, w - 1)) yield [0, c]
    for (const r of range(1, h - 1)) yield [r, w - 1]
    if (h > 1) for (const c of [...range(0, w - 2)].reverse()) yield [h - 1, c]
    if (w > 1) for (const r of [...range(1, h - 2)].reverse()) yield [r, 0]
  }

  const helper = function* (
    matrix: number[][],
  ): Generator<number, void, undefined> {
    const [h, w] = getSize(matrix)
    const coords: Coord[] = [...spiralCoords(h, w)]
    yield* coords.map(([r, c]) => matrix[r][c])

    if (h < 3 || w < 3) {
      return
    }

    const newMatrix = matrix.slice(1, -1).map((row) => row.slice(1, -1))

    yield* helper(newMatrix)
  }

  return [...helper(matrix)]
}
