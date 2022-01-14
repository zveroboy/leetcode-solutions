class InfiniteOpError extends Error {
  constructor() {
    super('Infinite op')
    this.name = 'InfiniteError'
  }
}

let lim = 100

export const assertIsFinite = () => {
  if (--lim < 0) {
    throw new InfiniteOpError()
  }
}