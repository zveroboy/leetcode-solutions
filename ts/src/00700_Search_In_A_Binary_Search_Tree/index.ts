import { TreeNode } from 'data/TreeNode'

export function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root?.val === val) {
    return root
  }

  if (!root?.left && !root?.right) {
    return null
  }

  return searchBST(root?.left, val) || searchBST(root?.right, val)
}
