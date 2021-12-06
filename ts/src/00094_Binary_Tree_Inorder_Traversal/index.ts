import { TreeNode } from 'data/TreeNode'

export default function inorderTraversal(root: TreeNode | null): number[] {
  const helper = (acc: number[], tree: TreeNode | null) => {
    if (!tree) {
      return acc
    }

    if (tree.left) {
      helper(acc, tree.left)
    }
    acc.push(tree.val)
    if (tree.right) {
      helper(acc, tree.right)
    }
    return acc
  }

  return helper([], root)
}
