import { TreeNode } from 'data/TreeNode'

export function inorderTraversalRecursive(root: TreeNode | null): number[] {
  const helper = (acc: number[], tree: TreeNode | null) => {
    if (!tree) {
      return acc
    }

    helper(acc, tree.left)
    acc.push(tree.val)
    helper(acc, tree.right)

    return acc
  }

  return helper([], root)
}

export function inorderTraversal(root: TreeNode | null): number[] {
  const helper = function* (root: TreeNode | null): Generator<number> {
    if (!root) return
    yield* helper(root.left)
    yield root.val
    yield* helper(root.right)
  }
  return [...helper(root)]
}
