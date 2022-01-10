import { Node } from '../data/NaryTree'

export function postorder(root: Node | null): number[] {
  const result: number[] = []
  if (!root) return result

  const stack: Node[] = [root]
  while (stack.length) {
    const tree = stack.pop()
    if (!tree) throw new Error('sww')
    result.push(tree.val)
    tree.children.forEach((c) => stack.push(c))
  }

  return result.reverse()
}
