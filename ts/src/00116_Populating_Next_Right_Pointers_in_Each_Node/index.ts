import { bfs } from '../data/Search'
import { Node } from '../data/Node'

type Item = [node: Node, level: number]

export function connect(root: Node | null): Node | null {
  if (!root) {
    return root
  }

  const node2Levels: Node[][] = []

  const run = bfs<Item>(function* (item) {
    const [node, level] = item

    node2Levels[level] ??= []
    const prevNode = node2Levels[level].pop()
    if (prevNode) {
      prevNode.next = node
    }

    node2Levels[level].push(node)

    if (node.left) yield [node.left, level + 1]
    if (node.right) yield [node.right, level + 1]
  })

  run([root, 0])

  return root
}
