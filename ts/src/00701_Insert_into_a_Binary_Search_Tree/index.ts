import { TreeNode } from '../data/TreeNode'

export function insertIntoBST(
  root: TreeNode | null,
  val: number,
): TreeNode | null {
  const node = new TreeNode(val)

  if (!root) {
    return node
  }

  if (val < root.val) {
    root.left = insertIntoBST(root.left, val)
  }

  if (val > root.val) {
    root.right = insertIntoBST(root.right, val)
  }

  return root
}
