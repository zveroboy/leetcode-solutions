// type Matrix2D<T> = T[][]
// type MatrixIndex = [row: number, cell: number]
type Rect = [x1: number, y1: number, x2: number, y2: number]

// export const getArgs = <P extends unknown[]>(...args: P) => args

// export const mapMartixIndexes = function* <T>(
//   w: number,
//   h: number,
//   fn: (row: number, cell: number) => T,
// ): IterableIterator<T> {
//   for (let row = 0; row < h; row++) {
//     for (let cell = 0; cell < w; cell++) {
//       yield fn(row, cell)
//     }
//   }
// }

// export const iterateToMatrix = <T>(
//   iter: Iterable<MatrixIndex>,
//   fn: (mi: MatrixIndex) => T,
// ): Matrix2D<T> => {
//   const martix: Matrix2D<T> = []
//   for (const [y, x] of iter) {
//     martix[y] ??= []
//     martix[y][x] = fn([x, y])
//   }
//   return martix
// }

const absToRel = ([x1, y1, x2, y2]: Rect, [toX1, toY1]: Rect): Rect => {
  return [x1 - toX1, y1 - toY1, x2 - toX1, y2 - toY1]
}

export default function (rects: number[][]): boolean {
  const extremeRect = (rects as Rect[]).reduce(
    ([px1, py1, px2, py2], [nx1, ny1, nx2, ny2]) => [
      Math.min(px1, nx1),
      Math.min(py1, ny1),
      Math.max(px2, nx2),
      Math.max(py2, ny2),
    ],
  )

  // const extremeEvenSqare = Math.floo()
  const extremeW = extremeRect[2] - extremeRect[0]
  const extremeSampleW = extremeW - (extremeW % 2)

  const extremeH = extremeRect[3] - extremeRect[1]
  const extremeSampleH = extremeH - (extremeH % 2)

  const extremeSquare = extremeW * extremeH
  let extremeSampleSqare = extremeSampleW * extremeSampleH

  let totalSquare = 0

  ;(rects as Rect[]).forEach((rect) => {
    const [x1, y1, x2, y2] = absToRel(rect as Rect, extremeRect as Rect)
    totalSquare += (x2 - x1) * (y2 - y1)
  })

  if (extremeSquare !== totalSquare) {
    return false
  }

  if (extremeSquare === 1) {
    return true
  }

  let squares: number[] = [0, 0]

  if (extremeH === 1) {
    extremeSampleSqare = extremeSampleW
    ;(rects as Rect[]).forEach((rect) => {
      const [x1, , x2] = absToRel(rect, extremeRect)

      if (x1 >= extremeSampleW) {
        return
      }

      if (x1 < extremeSampleW / 2) {
        const w = Math.min(x2, extremeSampleW / 2) - x1
        const idx = 0
        squares[idx] += w
      }

      if (x2 >= extremeSampleW / 2) {
        const w =
          Math.min(x2, extremeSampleW) - Math.max(x1, extremeSampleW / 2)
        const idx = 1
        squares[idx] += w
      }
    })

    return squares.every((square) => square === extremeSampleSqare / 2)
  }

  if (extremeW === 1) {
    extremeSampleSqare = extremeSampleH
    ;(rects as Rect[]).forEach((rect) => {
      const [, y1, , y2] = absToRel(rect, extremeRect)

      if (y1 >= extremeSampleH) {
        return
      }

      if (y1 < extremeSampleH / 2) {
        const h = Math.min(y2, extremeSampleH / 2) - y1
        const idx = 0
        squares[idx] += h
      }

      if (y2 >= extremeSampleH / 2) {
        const h =
          Math.min(y2, extremeSampleH) - Math.max(y1, extremeSampleH / 2)
        const idx = 1
        squares[idx] += h
      }
    })

    return squares.every((square) => square === extremeSampleSqare / 2)
  }

  squares = [0, 0, 0, 0]
  ;(rects as Rect[]).forEach((rect) => {
    const [x1, y1, x2, y2] = absToRel(rect as Rect, extremeRect as Rect)

    if (x1 >= extremeSampleW || y1 >= extremeSampleH) {
      return
    }

    if (x1 < extremeSampleW / 2 && y1 < extremeSampleH / 2) {
      const w = Math.min(x2, extremeSampleW / 2) - x1
      const h = Math.min(y2, extremeSampleH / 2) - y1
      const idx = 0
      squares[idx] += w * h
    }

    if (
      // relX1 >= extremeEventW / 2 &&
      y1 < extremeSampleH / 2 &&
      x2 >= extremeSampleW / 2
    ) {
      const w = Math.min(x2, extremeSampleW) - Math.max(x1, extremeSampleW / 2)
      const h = Math.min(y2, extremeSampleH / 2) - y1
      const idx = 1
      squares[idx] += w * h
    }

    if (
      x1 < extremeSampleW / 2 &&
      // relY1 >= extremeEventH / 2 &&
      y2 >= extremeSampleH / 2
    ) {
      const w = Math.min(x2, extremeSampleW / 2) - x1
      const h = Math.min(y2, extremeSampleH) - Math.max(y1, extremeSampleH / 2)
      const idx = 2
      squares[idx] += w * h
    }

    if (x2 > extremeSampleW / 2 && y2 > extremeSampleH / 2) {
      const w = Math.min(x2, extremeSampleW) - Math.max(x1, extremeSampleW / 2)
      const h = Math.min(y2, extremeSampleH) - Math.max(y1, extremeSampleH / 2)
      const idx = 3
      squares[idx] += w * h
    }
  })

  return squares.every((square) => square === extremeSampleSqare / 4)

  // rects.forEach(([x1, y1, x2, y2]) => {
  // const relX1 = x1 - extrX
  // const relY1 = y1 - extrY
  // const relX2 = x2 - extrX
  // const relY2 = y2 - extrY
  // for (let x = relX1; x < relX2; x++) {
  //   filledX[x] ??= 0
  //   filledX[x] += relY2 - relY1
  // }
  // for (let y = relY1; y < relY2; y++) {
  //   filledY[y] ??= 0
  //   filledY[y] += relX2 - relX1
  // }
  // })

  // const [extrX, extrY] = extremeRect
  // let extrW = extremeRect[2] - extremeRect[0]
  // let extrH = extremeRect[3] - extremeRect[1]

  // const filledX: number[] = []
  // const filledY: number[] = []
  // rects.forEach(([x1, y1, x2, y2]) => {
  //   const relX1 = x1 - extrX
  //   const relY1 = y1 - extrY
  //   const relX2 = x2 - extrX
  //   const relY2 = y2 - extrY

  //   for (let x = relX1; x < relX2; x++) {
  //     filledX[x] ??= 0
  //     filledX[x] += relY2 - relY1
  //   }
  //   for (let y = relY1; y < relY2; y++) {
  //     filledY[y] ??= 0
  //     filledY[y] += relX2 - relX1
  //   }
  // })

  // Make filled even
  // if(extrW % 2 === 1){
  //   extrW--
  // }

  // if (filledX.length % 2 === 0 && filledY.length % 2 === 0) {
  //   return (
  //     filledY.every((sumY) => sumY === extrW) &&
  //     filledX.every((sumX) => sumX === extrH)
  //   )
  // }

  // console.log('extr', [extrW, extrH], extremeRect)
  // console.log('filled', filledY, filledX)
  // return (
  //   filledY.every((sumY) => sumY === extrW) &&
  //   filledX.every((sumX) => sumX === extrH)
  // )
}

// export default function (rects: number[][]): boolean {
//   const extremeRect = rects.reduce(
//     ([px1, py1, px2, py2], [nx1, ny1, nx2, ny2]) => [
//       Math.min(px1, nx1),
//       Math.min(py1, ny1),
//       Math.max(px2, nx2),
//       Math.max(py2, ny2),
//     ],
//   )

//   const [extrX, extrY] = extremeRect
//   let extrW = extremeRect[2] - extremeRect[0]
//   let extrH = extremeRect[3] - extremeRect[1]

//   const filledX: number[] = []
//   const filledY: number[] = []
//   rects.forEach(([x1, y1, x2, y2]) => {
//     const relX1 = x1 - extrX
//     const relY1 = y1 - extrY
//     const relX2 = x2 - extrX
//     const relY2 = y2 - extrY

//     for (let x = relX1; x < relX2; x++) {
//       filledX[x] ??= 0
//       filledX[x] += relY2 - relY1
//     }
//     for (let y = relY1; y < relY2; y++) {
//       filledY[y] ??= 0
//       filledY[y] += relX2 - relX1
//     }
//   })

//   // Make filled even
//   // if(extrW % 2 === 1){
//   //   extrW--
//   // }

//   // if (filledX.length % 2 === 0 && filledY.length % 2 === 0) {
//   //   return (
//   //     filledY.every((sumY) => sumY === extrW) &&
//   //     filledX.every((sumX) => sumX === extrH)
//   //   )
//   // }

//   // console.log('extr', [extrW, extrH], extremeRect)
//   // console.log('filled', filledY, filledX)
//   return (
//     filledY.every((sumY) => sumY === extrW) &&
//     filledX.every((sumX) => sumX === extrH)
//   )
// }
