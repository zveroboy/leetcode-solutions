import { TreeNode } from 'data/TreeNode'

export function preorderTraversal(root: TreeNode | null): number[] {
  const helper = (acc: number[], tree: TreeNode | null) => {
    if (!tree) {
      return acc
    }

    acc.push(tree.val)
    helper(acc, tree.left)
    helper(acc, tree.right)

    return acc
  }

  return helper([], root)
}
