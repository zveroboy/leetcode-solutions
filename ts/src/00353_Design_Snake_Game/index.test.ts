import { SnakeGame } from '.'

describe(SnakeGame, () => {
  it('case 1', () => {
    const snakeGame = new SnakeGame(3, 2, [
      [1, 2],
      [0, 1],
    ])
    expect(snakeGame.move('R')).toBe(0) // return 0
    expect(snakeGame.move('D')).toBe(0) // return 0
    expect(snakeGame.move('R')).toBe(1) // return 1, snake eats the first piece of food. The second piece of food appears at (0, 1).
    expect(snakeGame.move('U')).toBe(1) // return 1
    expect(snakeGame.move('L')).toBe(2) // return 2, snake eats the second food. No more food appears.
    expect(snakeGame.move('U')).toBe(-1) // return -1, game over because snake collides with border
  })
  it('case 2', () => {
    const snakeGame = new SnakeGame(2, 2, [[0, 1]])
    expect(snakeGame.move('R')).toBe(1)
    expect(snakeGame.move('D')).toBe(1)
  })
  it('case 3', () => {
    const snakeGame = new SnakeGame(3, 3, [
      [2, 0],
      [0, 0],
      [0, 2],
      [2, 2],
    ])

    expect(snakeGame.move('D')).toBe(0)
    expect(snakeGame.move('D')).toBe(1)
    expect(snakeGame.move('R')).toBe(1)
    expect(snakeGame.move('U')).toBe(1)
    expect(snakeGame.move('U')).toBe(1)
    expect(snakeGame.move('L')).toBe(2)
    expect(snakeGame.move('D')).toBe(2)
    expect(snakeGame.move('R')).toBe(2)
    expect(snakeGame.move('R')).toBe(2)
    expect(snakeGame.move('U')).toBe(3)
    expect(snakeGame.move('L')).toBe(3)
    expect(snakeGame.move('D')).toBe(3)
  })
  it('case 4', () => {
    const snakeGame = new SnakeGame(3, 3, [
      [2, 0],
      [0, 0],
      [0, 2],
      [0, 1],
      [2, 2],
      [0, 1],
    ])

    expect(snakeGame.move('D')).toBe(0)
    expect(snakeGame.move('D')).toBe(1)
    expect(snakeGame.move('R')).toBe(1)
    expect(snakeGame.move('U')).toBe(1)
    expect(snakeGame.move('U')).toBe(1)
    expect(snakeGame.move('L')).toBe(2)
    expect(snakeGame.move('D')).toBe(2)
    expect(snakeGame.move('R')).toBe(2)
    expect(snakeGame.move('R')).toBe(2)
    expect(snakeGame.move('U')).toBe(3)
    expect(snakeGame.move('L')).toBe(4)
    expect(snakeGame.move('L')).toBe(4)
    expect(snakeGame.move('D')).toBe(4)
    expect(snakeGame.move('R')).toBe(4)
    expect(snakeGame.move('U')).toBe(-1)
  })
})
