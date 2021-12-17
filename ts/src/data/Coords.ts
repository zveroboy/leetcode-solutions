// export const martix = <T>(value: T, [x1, y1]: [x1: number, y1: number], [x2, y2]: [x2: number, y2: number]): T[][]  => {
//   // return Array(x2 - x1).fill([]).map(()=>Array())
//   for (let i = 0; i < y2 - y1; i++) {
//     for (let j = 0; j < x2 - x1; j++) {
//       yield [y, x]
//     }
//   }
// }

import { Coord } from './Matrix'

export const Move: Record<string, Coord> = Object.freeze({
  UP: [-1, 0],
  DOWN: [1, 0],
  LEFT: [0, -1],
  RIGHT: [0, 1],
})

export const martixGen = function* (
  [x1, y1]: [x1: number, y1: number],
  [x2, y2]: [x2: number, y2: number],
): Generator<Coord> {
  for (let i = 0; i < y2 - y1; i++) {
    for (let j = 0; j < x2 - x1; j++) {
      yield [i, j]
    }
  }
}
