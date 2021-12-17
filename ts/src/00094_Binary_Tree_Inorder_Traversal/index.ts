import { TreeNode } from 'data/TreeNode'

export function inorderTraversal(root: TreeNode | null): number[] {
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
