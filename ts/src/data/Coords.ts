// export const martix = <T>(value: T, [x1, y1]: [x1: number, y1: number], [x2, y2]: [x2: number, y2: number]): T[][]  => {
//   // return Array(x2 - x1).fill([]).map(()=>Array())
//   for (let i = 0; i < y2 - y1; i++) {
//     for (let j = 0; j < x2 - x1; j++) {
//       yield [y, x]
//     }
//   }
// }

export const martixGen = function * ([x1, y1]: [x1: number, y1: number], [x2, y2]: [x2: number, y2: number]): IterableIterator<number[]> {
  for (let i = 0; i < y2 - y1; i++) {
    for (let j = 0; j < x2 - x1; j++) {
      yield [j, i]
    }
  }
}