import { bfs } from './Search'

export class Node {
  public children: Node[] = []
  constructor(public val: number = 0) {}
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
  createTree()
  if (values.length === 0 || !root) {
    return null
  }

  const run = bfs<Node>(function* (node) {
    let child: Node | null
    while ((child = createTree())) {
      node.children.push(child)
      yield child
    }
  })

  run(root)

  return root
}

export const toArray = (root: Node | null): (number | null)[] => {
  const result: (number | null)[] = []
  if (!root) return result

  const run = bfs<Node>(function* (node) {
    for (const child of node.children) {
      result.push(child.val)
      yield child
    }
    result.push(null)
  })

  result.push(root.val)
  result.push(null)
  root && run(root)

  while (result.length > 0 && result[result.length - 1] == null) {
    result.pop()
  }

  return result
}
