import { Node } from '../data/NaryTree'

export function preorderRecursive(root: Node | null): number[] {
  const result: number[] = []

  const helper = (tree: Node | null) => {
    if (!tree) {
      return
    }

    result.push(tree.val)
    tree.children.forEach(helper)
  }

  helper(root)
  return result
}

export function preorderRecurvive2(root: Node | null): number[] {
  const result: number[] = []
  root?.val != null && result.push(root.val)
  return result.concat(root?.children.flatMap(preorderRecurvive2) ?? [])
}

export function preorder(root: Node | null): number[] {
  const result: number[] = []
  if (!root) return result

  const stack: Node[] = [root]
  while (stack.length) {
    const tree = stack.pop()
    if (!tree) throw new Error('sww')
    result.push(tree.val)
    ;[...tree.children].reverse().forEach((c) => stack.push(c))
  }

  return result
}
