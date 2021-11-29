import solution from '.'

describe('should solve', () => {
  // it('martixGenFromRect', () => {
  //   const rect = [1, 1, 3, 3]
  //   expect([
  //     ...mapMartixIndexes(rect[2] - rect[0], rect[3] - rect[1], getArgs),
  //   ]).toEqual([
  //     [0, 0],
  //     [0, 1],
  //     [1, 0],
  //     [1, 1],
  //   ])
  // })
  // it('iterateToMatrix', () => {
  //   const rect = [1, 1, 3, 3]
  //   expect(
  //     iterateToMatrix(
  //       mapMartixIndexes(rect[2] - rect[0], rect[3] - rect[1], getArgs),
  //       () => 1,
  //     ),
  //   ).toEqual([
  //     [1, 1],
  //     [1, 1],
  //   ])
  //   expect(
  //     iterateToMatrix(
  //       [
  //         [0, 0],
  //         [0, 1],
  //         [1, 0],
  //         [1, 1],
  //       ],
  //       () => 1,
  //     ),
  //   ).toEqual([
  //     [1, 1],
  //     [1, 1],
  //   ])
  // })
  it('case 1', () => {
    expect(
      solution([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toEqual([1, 2, 4, 7, 5, 3, 6, 8, 9])
  })
  it('case 2', () => {
    expect(
      solution([
        [1, 2],
        [3, 4],
      ]),
    ).toEqual([1, 2, 3, 4])
  })
})
