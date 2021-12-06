import { TreeNode } from 'data/TreeNode'

export default function preorderTraversal(root: TreeNode | null): number[] {
  const helper = (acc: number[], tree: TreeNode | null) => {
    if (!tree) {
      return acc
    }

    acc.push(tree.val)
    if (tree.left) {
      helper(acc, tree.left)
    }
    if (tree.right) {
      helper(acc, tree.right)
    }
    return acc
  }

  return helper([], root)
}
