import { bfs } from './Search'

type SerialisedVal = number | null | '#'

export class Node {
  constructor(
    public val: number = 0,
    public left: Node | null = null,
    public right: Node | null = null,
    public next: Node | null = null,
  ) {}
}

const createTreeFactory =
  (valuesItr: Iterator<number | null>) => (): Node | null => {
    const valueResult = valuesItr.next()
    if (valueResult.done) {
      return null
    }
    if (valueResult.value == null) {
      return null
    }
    return new Node(valueResult.value)
  }

export const fromArray = (values: (number | null)[]): Node | null => {
  const createTree = createTreeFactory(values[Symbol.iterator]())
  const root = createTree()
  if (values.length === 0 || !root) {
    return null
  }

  const run = bfs<Node>(function* (node) {
    node.left = createTree()
    node.right = createTree()
    if (node.left) yield node.left
    if (node.right) yield node.right
  })

  run(root)

  return root
}

export const toArray = (root: Node | null): SerialisedVal[] => {
  const result: SerialisedVal[] = []

  const run = bfs<Node>(function* (node) {
    result.push(node.val)
    if (!node.next) {
      result.push('#')
    }
    if (node.left) yield node.left
    if (node.right) yield node.right
  })

  if (root) {
    run(root)
  }

  while (result.length > 0 && result[result.length - 1] == null) {
    result.pop()
  }

  return result
}
