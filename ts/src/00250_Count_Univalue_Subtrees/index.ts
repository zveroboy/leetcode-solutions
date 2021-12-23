import { TreeNode } from 'data/TreeNode'

let i = 0
export function countUnivalSubtrees(root: TreeNode | null): number {
  let acc = 0
  if (!root) {
    return acc
  }

  const helper = (root: TreeNode | null): boolean => {
    if (!root) {
      return true
    }

    const { left, right } = root
    const leftRes = helper(left)
    const rightRes = helper(right)

    if (
      leftRes &&
      (!left || left?.val === root.val) &&
      rightRes &&
      (!right || right?.val === root.val)
    ) {
      acc++
      return true
    }

    return false
  }
  helper(root)

  return acc
}
