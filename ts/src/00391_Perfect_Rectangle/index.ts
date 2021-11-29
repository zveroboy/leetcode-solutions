type Rect = [x1: number, y1: number, x2: number, y2: number]

export default function (rects: number[][]): boolean {
  if (!rects.length) {
    throw new Error('empty array')
  }

  const eRect: Rect = [Infinity, Infinity, -Infinity, -Infinity]
  for (let i = 0; i < rects.length; i++) {
    const rect = rects[i] as Rect

    eRect[0] = Math.min(eRect[0], rect[0])
    eRect[1] = Math.min(eRect[1], rect[1])
    eRect[2] = Math.max(eRect[2], rect[2])
    eRect[3] = Math.max(eRect[3], rect[3])
  }

  const extremeW = eRect[2] - eRect[0]
  const extremeH = eRect[3] - eRect[1]
  const extremeSquare = extremeW * extremeH

  const extremeSampleW = Math.floor(extremeW / 2) + (extremeW % 2)
  const extremeSampleH = Math.floor(extremeH / 2) + (extremeH % 2)

  const controlISumX = [0, 0]
  const controlISumY = [0, 0]
  let controlSqaure = 0

  for (const rect of rects as Rect[]) {
    const x1 = rect[0] - eRect[0]
    const y1 = rect[1] - eRect[1]
    const x2 = rect[2] - eRect[0]
    const y2 = rect[3] - eRect[1]

    const w = x2 - x1
    const h = y2 - y1

    if (x1 < extremeSampleW) {
      const sw = Math.min(x2, extremeSampleW) - x1
      const sum = sw * ((h * (h - 1)) / 2 + y1 * h)
      // const sum = h * ((sw * (sw - 1)) / 2 + x1 * sw)
      // console.log([x1, y1, x2, y2], sum, sw, x1)
      controlISumX[0] += sum
    }

    if (x2 >= extremeW - extremeSampleW) {
      const sx1 = Math.max(x1, extremeW - extremeSampleW)
      const sw = x2 - sx1
      const sum = sw * ((h * (h - 1)) / 2 + y1 * h)
      // const sum = h * ((sw * (sw - 1)) / 2 + sx1 * sw)
      // console.log([x1, y1, x2, y2], sum, sw, sx1)
      controlISumX[1] += sum
    }

    if (y1 < extremeSampleH) {
      const sh = Math.min(y2, extremeSampleH) - y1
      const sum = sh * ((w * (w - 1)) / 2 + x1 * w)
      // console.log([x1, y1, x2, y2], sum, sh, x1)
      controlISumY[0] += sum
      // controlISumX[0] += w * ((sh * (sh - 1)) / 2 + y1 * sh)
    }

    if (y2 >= extremeH - extremeSampleH) {
      const sy1 = Math.max(y1, extremeH - extremeSampleH)
      const sh = y2 - sy1
      const sum = sh * ((w * (w - 1)) / 2 + x1 * w)
      // console.log([x1, y1, x2, y2], sum, sh, sy1)
      controlISumY[1] += sum
      // controlISumX[1] += w * ((sh * (sh - 1)) / 2 + sy1 * sh)
    }

    // controlISumY += h * ((w * (w - 1)) / 2 + x1 * w)
    // controlISumX += w * ((h * (h - 1)) / 2 + y1 * h)

    controlSqaure += w * h
  }

  const extremeISampleX = extremeSampleW * ((extremeH * (extremeH - 1)) / 2)
  const extremeISampleY = extremeSampleH * ((extremeW * (extremeW - 1)) / 2)

  // console.log([extremeISumX, extremeISumY], [controlISumX, controlISumY])
  // console.log(controlISumX, controlISumY, extremeISampleX, extremeISampleY)

  return (
    extremeSquare === controlSqaure &&
    controlISumX[0] === controlISumX[1] &&
    controlISumX[0] === extremeISampleX &&
    controlISumY[0] === controlISumY[1] &&
    controlISumY[0] === extremeISampleY
    // extremeISumX === controlISumX &&
    // extremeISumY === controlISumY
  )
}

// export default function (rects: number[][]): boolean {
//   const eRect: Rect = [Infinity, Infinity, -Infinity, -Infinity]
//   for (let i = 0; i < rects.length; i++) {
//     const rect = rects[i] as Rect

//     eRect[0] = Math.min(eRect[0], rect[0])
//     eRect[1] = Math.min(eRect[1], rect[1])
//     eRect[2] = Math.max(eRect[2], rect[2])
//     eRect[3] = Math.max(eRect[3], rect[3])
//   }

//   const extremeW = eRect[2] - eRect[0]
//   const extremeH = eRect[3] - eRect[1]

//   const max = Math.max(extremeW, extremeH)
//   const min = Math.min(extremeW, extremeH)

//   const rows = max + min - 1

//   const realDiagAccTop: number[] = Array(rows).fill(0)
//   const realDiagAccLeft: number[] = Array(rows).fill(0)

//   for (const rect of rects as Rect[]) {
//     // const [x1, y1, x2, y2] = absToRel(rect, extremeRect)
//     const x1 = rect[0] - eRect[0]
//     const y1 = rect[1] - eRect[1]
//     const x2 = rect[2] - eRect[0]
//     const y2 = rect[3] - eRect[1]

//     for (let y = y1; y < y2; y++) {
//       for (let x = x1; x < x2; x++) {
//         const topRow = coordToDiagRowTop(x, y)
//         realDiagAccTop[topRow] ??= 0
//         realDiagAccTop[topRow] += 1

//         const leftRow = coordToDiagRowLeft(x, y, extremeW, extremeH)
//         realDiagAccLeft[leftRow] ??= 0
//         realDiagAccLeft[leftRow] += 1
//       }
//     }
//   }

//   const fr = max - min + 1
//   const nfr = (rows - fr) / 2

//   const calcDiagRowItems = (min: number, max: number, i: number): number => {
//     if (i < nfr) {
//       return i + 1
//     }
//     if (rows - i <= nfr) {
//       return rows - i
//     }
//     return min
//   }

//   // console.log(realDiagAccTop, min, max, rows, fr, nfr)

//   for (let i = 0; i < rows; i++) {
//     const calc = calcDiagRowItems(min, max, i)
//     // console.log([calc, i])

//     if (realDiagAccTop[i] !== calc || realDiagAccLeft[i] !== calc) {
//       return false
//     }
//   }

//   return true
// }
