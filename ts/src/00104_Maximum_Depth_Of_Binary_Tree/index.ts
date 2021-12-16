import { TreeNode } from 'data/TreeNode'

export function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0
  }
  return (
    Math.max(maxDepth(root?.left ?? null), maxDepth(root?.right ?? null)) + 1
  )
}
