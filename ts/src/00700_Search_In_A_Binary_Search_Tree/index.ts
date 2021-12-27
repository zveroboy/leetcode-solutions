import { TreeNode } from 'data/TreeNode'

export function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) {
    return null
  }

  if (root.val > val) {
    return searchBST(root.left, val)
  }

  if (root.val < val) {
    return searchBST(root.right, val)
  }

  return root
}
