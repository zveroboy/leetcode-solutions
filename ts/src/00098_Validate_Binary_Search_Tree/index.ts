import { TreeNode } from '../data/TreeNode'

export function isValidBST(root: TreeNode | null): boolean {
  if (!root) {
    return true
  }

  const helper = (
    root: TreeNode | null,
    range: { min: number; max: number },
  ): boolean => {
    if (!root) {
      return true
    }

    return (
      root.val > range.min &&
      root.val < range.max &&
      helper(root.left, {
        min: range.min,
        max: Math.min(range.max, root.val),
      }) &&
      helper(root.right, {
        min: Math.max(range.min, root.val),
        max: range.max,
      })
    )
  }

  return (
    helper(root.left, { min: -Infinity, max: root.val }) &&
    helper(root.right, { min: root.val, max: Infinity })
  )
}
