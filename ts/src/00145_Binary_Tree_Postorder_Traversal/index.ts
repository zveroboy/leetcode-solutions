import { TreeNode } from 'data/TreeNode'

export default function postorderTraversal(root: TreeNode | null): number[] {
  const helper = (acc: number[], tree: TreeNode | null) => {
    if (!tree) {
      return acc
    }

    if (tree.left) {
      helper(acc, tree.left)
    }

    if (tree.right) {
      helper(acc, tree.right)
    }

    acc.push(tree.val)
    return acc
  }

  return helper([], root)
}
