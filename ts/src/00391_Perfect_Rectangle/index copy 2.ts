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

  const max = Math.max(extremeW, extremeH)
  const min = Math.min(extremeW, extremeH)

  const rows = max + min - 1

  const diagTop: [number, number] = [0, 0]
  const diagLeft: [number, number] = [0, 0]
  // let diagTopE = 0
  // let diagTopO = 0
  // let diagLeftE = 0
  // let diagLeftO = 0
  // let horE = 0
  // let horO = 0
  // let vertE = 0
  // let vertO = 0

  let totalSqare = 0

  for (const rect of rects as Rect[]) {
    const x1 = rect[0] - eRect[0]
    const y1 = rect[1] - eRect[1]
    const x2 = rect[2] - eRect[0]
    const y2 = rect[3] - eRect[1]

    totalSqare += (x2 - x1) * (y2 - y1)
    for (let y = y1; y < y2; y++) {
      // const yRem = y % 2
      for (let x = x1; x < x2; x++) {
        // const xRem = x % 2
        // horO += xRem
        // horE += 1 - xRem

        // vertO += yRem
        // vertE += 1 - yRem

        const top = x + y
        // if (top % 2) {
        diagTop[top % 2] += top
        // } else {
        //   diagTop[1] += top
        // }

        const left = extremeH + x - y - 1
        // if (left % 2) {
        diagLeft[left % 2] += left
        // } else {
        //   diagLeft[1] += left
        // }

        // totalSqare += 1
      }
    }
  }

  const fr = max - min + 1
  const nfr = (rows - fr) / 2

  const calcDiagRowItems = (min: number, max: number, i: number): number => {
    if (i < nfr) {
      return i + 1
    }
    if (rows - i <= nfr) {
      return rows - i
    }
    return min
  }

  const controlDiag: [number, number] = [0, 0]
  // let controlDiagE = 0
  // let controlDiagO = 0
  for (let i = 0; i < rows; i++) {
    const calc = calcDiagRowItems(min, max, i)

    controlDiag[i % 2] += i * calc
    // if (i % 2) {
    //   controlDiagO += i * calc
    // } else {
    //   controlDiagE += i * calc
    // }
  }

  // const controlHorO = Math.floor(extremeW / 2) * extremeH
  // const controlHorE = controlHorO + Math.floor(extremeW % 2) * extremeH
  // const controlVertO = extremeW * Math.floor(extremeH / 2)
  // const controlVertE = controlVertO + Math.floor(extremeH % 2) * extremeW

  // console.log(
  //   [controlDiagE, controlDiagO],
  //   [diagTopE, diagTopO],
  //   [diagLeftE, diagLeftO],
  //   // [controlHorE, controlHorO],
  //   // [controlVertE, controlVertO],
  //   // [horE, horO],
  //   // [vertE, vertO],
  // )

  const controlSquare = extremeW * extremeH

  return (
    controlDiag[0] === diagTop[0] &&
    controlDiag[1] === diagTop[1] &&
    controlDiag[0] === diagLeft[0] &&
    controlDiag[1] === diagLeft[1] &&
    // &&
    // controlHorE === horE &&
    // controlVertE === vertE &&
    // controlHorO === horO &&
    // controlVertO === vertO
    totalSqare === controlSquare
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
