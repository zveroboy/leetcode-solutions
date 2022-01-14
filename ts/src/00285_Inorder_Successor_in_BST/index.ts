import { assertIsFinite } from '../utils/assertations'
import { TreeNode } from '../data/TreeNode'

export function inorderSuccessor(
  root: TreeNode | null,
  p: TreeNode | null,
): TreeNode | null {
  const helper = (
    root: TreeNode | null,
    p: TreeNode | null,
    closest: TreeNode | null,
  ): TreeNode | null => {
    assertIsFinite()
    if (!p || !root) {
      return closest
    }

    const diff = root.val - p.val

    if (diff < 0) {
      return helper(root?.right, p, closest)
    }

    if (diff > 0) {
      return helper(root?.left, p, root)
    }

    if (diff === 0) {
      return helper(p?.right, p, closest)
    }

    return null
  }

  return helper(root, p, null)
}
