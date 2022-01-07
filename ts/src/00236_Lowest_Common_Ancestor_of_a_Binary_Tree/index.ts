import { TreeNode } from '../data/TreeNode'

export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  if (!root) return root

  const helper = (
    stack: TreeNode[],
    searched: TreeNode | null,
  ): TreeNode[] | null => {
    const visited = new Set<TreeNode>()
    while (stack.length) {
      const node = stack[stack.length - 1]
      if (node === searched) {
        return stack
      }

      if (node.left && !visited.has(node.left)) {
        stack.push(node.left)
        continue
      }

      if (node.right && !visited.has(node.right)) {
        stack.push(node.right)
        continue
      }

      node.left && visited.delete(node.left)
      node.right && visited.delete(node.right)
      visited.add(node)
      stack.pop()
    }

    return null
  }

  const pStack = helper([root], p)
  const qStack = helper([root], q)

  if (!pStack || !qStack) return null

  while (pStack.length || qStack.length) {
    if (pStack.length < qStack.length) {
      qStack.pop()
      continue
    }
    if (pStack.length > qStack.length) {
      pStack.pop()
      continue
    }

    const pTop = pStack[pStack.length - 1]
    const qTop = qStack[qStack.length - 1]

    if (pTop === qTop) {
      return pTop
    }

    qStack.pop()
    pStack.pop()
  }

  return null
}
