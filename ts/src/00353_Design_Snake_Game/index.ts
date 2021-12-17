import { Move } from '../data/Coords'
import { add, compare, Coord, isOutOfBounds } from '../data/Matrix'

const DIRECTIONS: Record<string, Coord> = Object.freeze({
  U: Move.UP,
  D: Move.DOWN,
  L: Move.LEFT,
  R: Move.RIGHT,
})

class Snake {
  constructor(public body: Coord[]) {}
  get headCoords(): Coord {
    return this.body[this.body.length - 1]
  }
  get size(): number {
    return this.body.length - 1
  }
  eate(coords: Coord): void {
    this.body.push(coords)
  }
  move(coords: Coord): void {
    this.body.shift()
    this.body.push(coords)
  }
  checkCollision(coords: Coord): boolean {
    return this.body.slice(1).some((cur) => compare(cur, coords))
  }
  *[Symbol.iterator]() {
    yield* this.body
  }
}

export class SnakeGame {
  foodIdx = 0
  snake: Snake
  constructor(
    private width: number,
    private height: number,
    private food: number[][],
  ) {
    this.snake = new Snake([[0, 0]])
  }

  get curFoodCoords(): Coord | undefined {
    const curFoodCoords = this.food[this.foodIdx]
    return curFoodCoords && [curFoodCoords[0], curFoodCoords[1]]
  }

  output() {
    const output: number[][] = Array(this.height)
      .fill([])
      .map(() => Array(this.width).fill(0))

    for (const [y, x] of this.snake) {
      output[y][x] = 1
    }

    if (this.curFoodCoords) {
      const [y, x] = this.curFoodCoords
      output[y][x] = 8
    }

    return output
  }

  move(direction: string): number {
    const coordsDif = DIRECTIONS[direction]
    if (!coordsDif) {
      throw new Error('wrong direcrtion')
    }

    const newCoords = add(this.snake.headCoords, coordsDif)
    if (isOutOfBounds(this.width, this.height, newCoords)) {
      return -1
    }

    if (this.snake.checkCollision(newCoords)) {
      return -1
    }

    if (this.curFoodCoords && compare(this.curFoodCoords, newCoords)) {
      this.snake.eate(this.curFoodCoords)
      this.foodIdx++
      return this.snake.size
    }

    this.snake.move(newCoords)
    return this.snake.size
  }
}

/**
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */
