import { Node } from '../data/NaryTree'

export function levelOrder(root: Node | null): number[][] {
  const result: number[][] = []
  if (!root) return result

  const stack: [node: Node, depth: number][] = [[root, 0]]
  while (stack.length) {
    const item = stack.pop()
    if (!item) throw new Error('sww')
    const [node, depth] = item

    result[depth] ??= []
    result[depth].push(node.val)
    ;[...node.children].reverse().forEach((c) => stack.push([c, depth + 1]))
  }

  return result
}
