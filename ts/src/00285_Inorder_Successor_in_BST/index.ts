import { TreeNode } from '../data/TreeNode'

export function inorderSuccessor(
  root: TreeNode | null,
  p: TreeNode | null,
): TreeNode | null {
  if (!p || !root) {
    return null
  }

  if (p.val > root.val) {
    return inorderSuccessor(root?.right, p)
  }

  if (p.val < root.val) {
  }
}
